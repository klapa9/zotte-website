import { useEffect, useMemo, useState } from "react";
import { useSeoMeta } from "@unhead/react";
import CursorStyles from "@/components/CursorStyles";
import Navigation from "@/components/Navigation";
import AudioPlayer from "@/components/AudioPlayer";
import NeonDroom from "@/components/NeonDroom";
import { useNavigate } from "react-router-dom";
import { MessageCircleOff } from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL;

type CommentType = {
  id: number;
  content: string;
  userName: string;
  postId: string;
  sectionId: string;
  sectionTitle?: string | null;
  pageTitle?: string | null;
  pageUrl?: string | null;
  parentId: number | null;
  likesCount?: number;
  isHidden?: boolean;
  createdAt?: string;
  replies?: CommentType[];
};

type SectionGroup = {
  postId: string;
  sectionId: string;
  pageTitle: string;
  pageUrl: string | null;
  sectionTitle: string;
  comments: CommentType[];
};

type CommentCardProps = {
  comment: CommentType;
  depth?: number;
  replyToId: number | null;
  replyToContent: string | null;
  replyContent: string;
  setReplyToId: React.Dispatch<React.SetStateAction<number | null>>;
  setReplyToContent: React.Dispatch<React.SetStateAction<string | null>>;
  setReplyContent: React.Dispatch<React.SetStateAction<string>>;
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  handleReplySubmit: (e: React.FormEvent, parentId: number) => Promise<void>;
  cancelReply: () => void;
  likedComments: Record<number, boolean>;
  toggleLike: (commentId: number, isCurrentlyLiked: boolean) => Promise<void>;
  isAdmin: boolean;
  refreshComments: () => Promise<void>;
};

function countComments(items: CommentType[]): number {
  return items.reduce((acc, item) => {
    return acc + 1 + countComments(item.replies ?? []);
  }, 0);
}

function getAllCommentsFromTree(items: CommentType[]): CommentType[] {
  const result: CommentType[] = [];

  for (const item of items) {
    result.push(item);

    if (item.replies?.length) {
      result.push(...getAllCommentsFromTree(item.replies));
    }
  }

  return result;
}

function getGroupSortValue(group: SectionGroup, sortBy: string): number {
  const allComments = getAllCommentsFromTree(group.comments);

  if (allComments.length === 0) return 0;

  if (sortBy === "likes") {
    return Math.max(...allComments.map((c) => c.likesCount ?? 0));
  }

  if (sortBy === "replies") {
    return Math.max(...allComments.map((c) => countComments(c.replies ?? [])));
  }

  const timestamps = allComments.map((c) =>
    new Date(c.createdAt ?? 0).getTime()
  );

  if (sortBy === "oldest") {
    return Math.min(...timestamps);
  }

  return Math.max(...timestamps);
}

function findCommentById(
  items: CommentType[],
  commentId: number
): CommentType | null {
  for (const item of items) {
    if (item.id === commentId) return item;

    if (item.replies?.length) {
      const found = findCommentById(item.replies, commentId);
      if (found) return found;
    }
  }

  return null;
}

function updateLikeCountInTree(
  items: CommentType[],
  commentId: number,
  delta: number
): CommentType[] {
  return items.map((item) => {
    if (item.id === commentId) {
      return {
        ...item,
        likesCount: Math.max(0, (item.likesCount ?? 0) + delta),
      };
    }

    if (item.replies?.length) {
      return {
        ...item,
        replies: updateLikeCountInTree(item.replies, commentId, delta),
      };
    }

    return item;
  });
}

function commentTreeMatchesSearch(comment: CommentType, search: string): boolean {
  const q = search.trim().toLowerCase();
  if (!q) return true;

  const selfMatches =
    comment.content.toLowerCase().includes(q) ||
    comment.userName.toLowerCase().includes(q) ||
    comment.postId.toLowerCase().includes(q) ||
    comment.sectionId.toLowerCase().includes(q) ||
    (comment.sectionTitle ?? "").toLowerCase().includes(q) ||
    (comment.pageTitle ?? "").toLowerCase().includes(q);

  if (selfMatches) return true;

  return (comment.replies ?? []).some((reply) =>
    commentTreeMatchesSearch(reply, q)
  );
}

function sortComments(items: CommentType[], sortBy: string): CommentType[] {
  const cloned = [...items];

  cloned.sort((a, b) => {
    if (sortBy === "likes") {
      return (b.likesCount ?? 0) - (a.likesCount ?? 0);
    }

    if (sortBy === "oldest") {
      return (
        new Date(a.createdAt ?? 0).getTime() -
        new Date(b.createdAt ?? 0).getTime()
      );
    }

    if (sortBy === "replies") {
      return countComments(b.replies ?? []) - countComments(a.replies ?? []);
    }

    return (
      new Date(b.createdAt ?? 0).getTime() -
      new Date(a.createdAt ?? 0).getTime()
    );
  });

  return cloned.map((item) => ({
    ...item,
    replies: item.replies?.length ? sortComments(item.replies, sortBy) : [],
  }));
}

function formatDate(date?: string) {
  if (!date) return null;

  try {
    return new Intl.DateTimeFormat("nl-BE", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date(date));
  } catch {
    return null;
  }
}

function buildGroups(comments: CommentType[]): SectionGroup[] {
  const map = new Map<string, SectionGroup>();

  for (const comment of comments) {
    const key = `${comment.postId}__${comment.sectionId}`;

    if (!map.has(key)) {
      map.set(key, {
        postId: comment.postId,
        sectionId: comment.sectionId,
        pageTitle: comment.pageTitle?.trim() || comment.postId,
        pageUrl: comment.pageUrl?.trim() || null,
        sectionTitle: comment.sectionTitle?.trim() || comment.sectionId,
        comments: [],
      });
    }

    map.get(key)!.comments.push(comment);
  }

  return Array.from(map.values());
}

function CommentCard({
  comment,
  depth = 0,
  replyToId,
  replyToContent,
  replyContent,
  setReplyToId,
  setReplyToContent,
  setReplyContent,
  userName,
  setUserName,
  handleReplySubmit,
  cancelReply,
  likedComments,
  toggleLike,
  isAdmin,
  refreshComments,
}: CommentCardProps) {
  const isLiked = !!likedComments[comment.id];
  const likesCount = comment.likesCount ?? 0;
  const isReplyingHere = replyToId === comment.id;
  const createdLabel = formatDate(comment.createdAt);

  const cardClass = comment.isHidden
    ? "border-slate-400/30 bg-slate-500/10"
    : depth === 0
    ? "border-cyan-300/20 bg-white/10"
    : "border-white/10 bg-white/5";

  return (
    <li
      className={`rounded-2xl border p-4 md:p-5 backdrop-blur-sm shadow-[0_0_24px_rgba(255,255,255,0.04)] ${cardClass}`}
      style={{ marginLeft: depth > 0 ? `${Math.min(depth, 4) * 20}px` : 0 }}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-white font-black">{comment.userName}</span>

            {createdLabel && (
              <span className="text-xs text-white/50">{createdLabel}</span>
            )}

            {depth > 0 && (
              <span className="rounded-full border border-cyan-300/20 bg-cyan-500/10 px-2 py-1 text-[11px] text-cyan-100">
                Reply
              </span>
            )}

            {comment.isHidden && (
              <span className="rounded-full border border-red-300/20 bg-red-500/10 px-2 py-1 text-[11px] text-red-100">
                Verborgen
              </span>
            )}
          </div>

          <div
            className={`mt-2 text-base md:text-lg leading-relaxed ${
              comment.isHidden ? "text-white/50" : "text-white"
            }`}
          >
            {comment.isHidden ? "[Verborgen comment] " : ""}
            {comment.content}
          </div>

          {comment.isHidden && isAdmin && (
            <div className="mt-2 text-xs text-red-300">
              Deze comment is verborgen voor bezoekers.
            </div>
          )}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={() => {
            setReplyToId(comment.id);
            setReplyToContent(comment.content);
            setReplyContent("");
          }}
          className="rounded-full border border-cyan-300/20 bg-cyan-500/10 px-3 py-1.5 text-sm text-cyan-100 transition hover:scale-105 hover:bg-cyan-500/20"
        >
          Reply
        </button>

        <button
          type="button"
          onClick={() => toggleLike(comment.id, isLiked)}
          className={`rounded-full border px-3 py-1.5 text-sm transition hover:scale-105 ${
            isLiked
              ? "border-pink-300/20 bg-pink-500/15 text-pink-100"
              : "border-white/15 bg-white/5 text-white/80"
          }`}
        >
          {isLiked ? "❤️" : "🤍"} {likesCount}
        </button>

        {isAdmin && (
          <>
            <button
              type="button"
              onClick={async () => {
                const endpoint = comment.isHidden
                  ? `${API_URL}/comments/${comment.id}/unhide`
                  : `${API_URL}/comments/${comment.id}/hide`;

                const res = await fetch(endpoint, {
                  method: "PATCH",
                  credentials: "include",
                });

                const data = await res.json();

                if (!res.ok) {
                  alert(data.error || "Actie mislukt");
                  return;
                }

                await refreshComments();
              }}
              className={`rounded-full border px-3 py-1.5 text-sm transition hover:scale-105 ${
                comment.isHidden
                  ? "border-green-300/20 bg-green-500/10 text-green-100"
                  : "border-yellow-300/20 bg-yellow-500/10 text-yellow-100"
              }`}
            >
              {comment.isHidden ? "Unhide" : "Hide"}
            </button>

            <button
              type="button"
              onClick={async () => {
                const ok = window.confirm(
                  "Weet je zeker dat je deze comment wil verwijderen?"
                );
                if (!ok) return;

                const res = await fetch(`${API_URL}/comments/${comment.id}`, {
                  method: "DELETE",
                  credentials: "include",
                });

                const data = await res.json();

                if (!res.ok) {
                  alert(data.error || "Delete mislukt");
                  return;
                }

                await refreshComments();
              }}
              className="rounded-full border border-red-300/20 bg-red-500/10 px-3 py-1.5 text-sm text-red-100 transition hover:scale-105 hover:bg-red-500/20"
            >
              Delete
            </button>
          </>
        )}
      </div>

      {isReplyingHere && (
        <div className="mt-4 rounded-2xl border border-cyan-300/20 bg-cyan-500/10 p-4 backdrop-blur-md">
          <div className="mb-2 text-xs text-cyan-100/80">
            Replying to: "{replyToContent}"
          </div>

          <form
            onSubmit={(e) => handleReplySubmit(e, comment.id)}
            className="space-y-3"
          >
            <input
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Jouw naam..."
              className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 outline-none focus:border-cyan-400"
            />

            <textarea
              autoFocus
              value={replyContent}
              onChange={(e) => setReplyContent(e.target.value)}
              placeholder="Schrijf je reply..."
              rows={4}
              className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 outline-none focus:border-cyan-400"
            />

            <div className="flex gap-2">
              <button
                type="submit"
                className="rounded-xl bg-cyan-600 px-4 py-2 font-bold text-white transition hover:scale-105 hover:bg-cyan-700"
              >
                Reply
              </button>

              <button
                type="button"
                onClick={cancelReply}
                className="rounded-xl bg-white/15 px-4 py-2 font-bold text-white transition hover:scale-105 hover:bg-white/20"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {!!comment.replies?.length && (
        <ul className="mt-4 space-y-3">
          {comment.replies.map((reply) => (
            <CommentCard
              key={reply.id}
              comment={reply}
              depth={depth + 1}
              replyToId={replyToId}
              replyToContent={replyToContent}
              replyContent={replyContent}
              setReplyToId={setReplyToId}
              setReplyToContent={setReplyToContent}
              setReplyContent={setReplyContent}
              userName={userName}
              setUserName={setUserName}
              handleReplySubmit={handleReplySubmit}
              cancelReply={cancelReply}
              likedComments={likedComments}
              toggleLike={toggleLike}
              isAdmin={isAdmin}
              refreshComments={refreshComments}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

export default function CommentsOverviewPage() {
  const navigate = useNavigate();
  const [comments, setComments] = useState<CommentType[]>([]);
  const [loading, setLoading] = useState(true);

  const [userName, setUserName] = useState("");
  const [replyToId, setReplyToId] = useState<number | null>(null);
  const [replyToContent, setReplyToContent] = useState<string | null>(null);
  const [replyContent, setReplyContent] = useState("");

  const [newPosts, setNewPosts] = useState<Record<string, string>>({});
  const [expandedForms, setExpandedForms] = useState<Record<string, boolean>>(
    {}
  );
  const [likedComments, setLikedComments] = useState<Record<number, boolean>>(
    {}
  );
  const [isAdmin, setIsAdmin] = useState(false);

  const [search, setSearch] = useState("");
  const [selectedPostId, setSelectedPostId] = useState("all");
  const [sortBy, setSortBy] = useState("newest");

  const likesStorageKey = "likedComments:overview";

  useSeoMeta({
    title: "Alle reacties - Zottewebsite",
    description:
      "Overzicht van alle reacties op de verschillende pagina's en secties.",
  });

  const fetchComments = async () => {
    try {
      setLoading(true);

      const res = await fetch(`${API_URL}/comments/all`, {
        credentials: "include",
        cache: "no-store",
      });

      const data = await res.json();

      if (!res.ok) {
        console.error("Comments ophalen mislukt:", data);
        setComments([]);
        return;
      }

      setComments(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Netwerkfout bij comments ophalen:", error);
      setComments([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const res = await fetch(`${API_URL}/admin/me`, {
          credentials: "include",
          cache: "no-store",
        });

        const data = await res.json();
        setIsAdmin(!!data.isAdmin);
      } catch {
        setIsAdmin(false);
      }
    };

    checkAdmin();
  }, []);

  useEffect(() => {
    const savedName = localStorage.getItem("userName");
    if (savedName) setUserName(savedName);
  }, []);

  useEffect(() => {
    localStorage.setItem("userName", userName);
  }, [userName]);

  useEffect(() => {
    const savedLikes = localStorage.getItem(likesStorageKey);
    if (savedLikes) {
      setLikedComments(JSON.parse(savedLikes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(likesStorageKey, JSON.stringify(likedComments));
  }, [likedComments]);

  const toggleLike = async (commentId: number, isCurrentlyLiked: boolean) => {
    const nextLiked = !isCurrentlyLiked;

    setLikedComments((prev) => ({
      ...prev,
      [commentId]: nextLiked,
    }));

    setComments((prev) =>
      updateLikeCountInTree(prev, commentId, nextLiked ? 1 : -1)
    );

    const endpoint = nextLiked
      ? `${API_URL}/comments/like`
      : `${API_URL}/comments/unlike`;

    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ commentId }),
    });

    if (!res.ok) {
      setLikedComments((prev) => ({
        ...prev,
        [commentId]: isCurrentlyLiked,
      }));

      setComments((prev) =>
        updateLikeCountInTree(prev, commentId, nextLiked ? -1 : 1)
      );

      alert("Er ging iets mis bij het liken.");
    }
  };

  const cancelReply = () => {
    setReplyToId(null);
    setReplyToContent(null);
    setReplyContent("");
  };

  const handleClose = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  const handleReplySubmit = async (
    e: React.FormEvent,
    parentId: number
  ) => {
    e.preventDefault();

    if (!replyContent.trim() || !userName.trim()) {
      alert("Vul alles in");
      return;
    }

    const parentComment = findCommentById(comments, parentId);

    if (!parentComment) {
      alert("Parent comment niet gevonden.");
      return;
    }

    const res = await fetch(`${API_URL}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: replyContent,
        userName,
        postId: parentComment.postId,
        sectionId: parentComment.sectionId,
        sectionTitle: parentComment.sectionTitle,
        parentId,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.error || "Reply mislukt");
      return;
    }

    setReplyContent("");
    setReplyToId(null);
    setReplyToContent(null);

    await fetchComments();
  };

  const groupedSections = useMemo(() => {
    let groups = buildGroups(comments);

    if (selectedPostId !== "all") {
      groups = groups.filter((group) => group.postId === selectedPostId);
    }

    if (search.trim()) {
      groups = groups
        .map((group) => ({
          ...group,
          comments: group.comments.filter((comment) =>
            commentTreeMatchesSearch(comment, search)
          ),
        }))
        .filter((group) => group.comments.length > 0);
    }

    groups = groups.map((group) => ({
      ...group,
      comments: sortComments(group.comments, sortBy),
    }));

    groups.sort((a, b) => {
      if (sortBy === "oldest") {
        return getGroupSortValue(a, sortBy) - getGroupSortValue(b, sortBy);
      }

      if (sortBy === "newest" || sortBy === "likes" || sortBy === "replies") {
        return getGroupSortValue(b, sortBy) - getGroupSortValue(a, sortBy);
      }

      return 0;
    });

    return groups;
  }, [comments, selectedPostId, search, sortBy]);

  const availablePosts = useMemo(() => {
    const unique = new Map<string, string>();

    for (const comment of comments) {
      unique.set(comment.postId, comment.pageTitle?.trim() || comment.postId);
    }

    return Array.from(unique.entries())
      .map(([value, label]) => ({ value, label }))
      .sort((a, b) => a.label.localeCompare(b.label));
  }, [comments]);

  const totals = useMemo(() => {
    return {
      sections: groupedSections.length,
      comments: groupedSections.reduce(
        (acc, group) => acc + countComments(group.comments),
        0
      ),
    };
  }, [groupedSections]);

  const handleTopLevelPostSubmit = async (
    e: React.FormEvent,
    group: SectionGroup
  ) => {
    e.preventDefault();

    const key = `${group.postId}__${group.sectionId}`;
    const content = (newPosts[key] ?? "").trim();

    if (!content || !userName.trim()) {
      alert("Vul alles in");
      return;
    }

    const res = await fetch(`${API_URL}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content,
        userName,
        postId: group.postId,
        sectionId: group.sectionId,
        sectionTitle: group.sectionTitle,
        parentId: null,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.error || "Post mislukt");
      return;
    }

    setNewPosts((prev) => ({
      ...prev,
      [key]: "",
    }));

    setExpandedForms((prev) => ({
      ...prev,
      [key]: false,
    }));

    await fetchComments();
  };

  return (
    <>
      <NeonDroom />
      <CursorStyles />
      <AudioPlayer pageType="reacties" />

      <div className="min-h-screen overflow-hidden relative">
        <div className="relative z-10 min-h-screen flex flex-col">
          <div className="py-16 px-4 text-center">
            <h1 className="text-5xl md:text-7xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-600 animate-pulse">
              ALLE REACTIES
            </h1>
            <p className="text-xl md:text-2xl text-white font-bold mb-4">
              Ontdek wat bezoekers overal op de site delen
              
            </p>
            
          </div>

          <div className="flex-1 px-4 pb-16">
            <div className="max-w-6xl mx-auto space-y-10">
              <div className="rounded-3xl p-6 md:p-8 border border-white/20 bg-white/10 backdrop-blur-md shadow-[0_0_40px_rgba(255,255,255,0.08)]">
                <div className="grid gap-4 md:grid-cols-4">
                  <div className="md:col-span-2">
                    <label className="block text-white font-bold mb-2">
                      Zoek in reacties
                    </label>

                    <div className="flex gap-3">
                      <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Zoek op naam, inhoud, pagina of sectie..."
                        className="flex-1 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 outline-none focus:border-cyan-400"
                      />

                      
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-bold mb-2">
                      Filter op pagina
                    </label>
                    <select
                      value={selectedPostId}
                      onChange={(e) => setSelectedPostId(e.target.value)}
                      className="w-full rounded-2xl border border-white/20 bg-slate-900/80 px-4 py-3 text-white outline-none focus:border-cyan-400"
                    >
                      <option value="all">Alle pagina's</option>
                      {availablePosts.map((post) => (
                        <option key={post.value} value={post.value}>
                          {post.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-white font-bold mb-2">
                      Sortering
                    </label>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full rounded-2xl border border-white/20 bg-slate-900/80 px-4 py-3 text-white outline-none focus:border-cyan-400"
                    >
                      <option value="newest">Nieuwste eerst</option>
                      <option value="oldest">Oudste eerst</option>
                      <option value="likes">Meeste likes</option>
                      <option value="replies">Meeste replies</option>
                    </select>
                  </div>
                  
                </div>

                <div className="mt-4 flex flex-wrap gap-3 text-sm">
                  <div className="rounded-full border border-cyan-300/30 bg-cyan-500/10 px-4 py-2 text-cyan-100">
                    Secties: <strong>{totals.sections}</strong>
                  </div>
                  <div className="rounded-full border border-pink-300/30 bg-pink-500/10 px-4 py-2 text-pink-100">
                    Comments totaal: <strong>{totals.comments}</strong>
                  </div>
                  <button
                    type="button"
                    onClick={handleClose}
                    className="shrink-0 inline-flex items-center gap-2 rounded-2xl border border-pink-300/30 bg-pink-500/10 px-3 py-3 font-bold text-pink-100 transition hover:scale-105 hover:bg-pink-500/20"
                    aria-label="Sluit reactiespagina"
                    title="Sluiten"
                  >
                    <MessageCircleOff className="h-5 w-5" />
                    <span className="hidden sm:inline">Alle reacties sluiten</span>
                  </button>
                </div>
              </div>

              {loading ? (
                <div className="rounded-3xl border border-white/20 bg-white/10 p-8 text-center text-white backdrop-blur-md">
                  Reacties laden...
                </div>
              ) : groupedSections.length === 0 ? (
                <div className="rounded-3xl border border-white/20 bg-white/10 p-8 text-center text-white backdrop-blur-md">
                  Geen reacties gevonden.
                </div>
              ) : (
                <div className="space-y-8">
                  {groupedSections.map((group) => {
                    const groupKey = `${group.postId}__${group.sectionId}`;
                    const postValue = newPosts[groupKey] ?? "";
                    const isExpanded = !!expandedForms[groupKey];

                    return (
                      <section
                        key={groupKey}
                        className="relative rounded-3xl p-6 md:p-8 border border-white/20 bg-black/30 backdrop-blur-md shadow-[0_0_40px_rgba(34,211,238,0.08)]"
                      >
                        <div className="mb-6 flex flex-col gap-4 border-b border-white/10 pb-5 md:flex-row md:items-start md:justify-between">
                          <div>
                            <div className="text-xs font-black uppercase tracking-[0.22em] text-cyan-300">
                              Pagina
                            </div>
                            <h2 className="mt-2 text-2xl md:text-4xl font-black text-white">
                              {group.pageTitle}
                            </h2>

                            <div className="mt-4 text-xs font-black uppercase tracking-[0.22em] text-pink-300">
                              Sectie
                            </div>
                            <h3 className="mt-2 text-xl md:text-2xl font-bold text-white">
                              {group.sectionTitle}
                            </h3>

                            <div className="mt-4 text-sm text-white/70">
                              Top-level comments:{" "}
                              <strong>{group.comments.length}</strong> · Totaal in
                              thread: <strong>{countComments(group.comments)}</strong>
                            </div>
                          </div>

                          {group.pageUrl && (
                            <a
                              href={group.pageUrl}
                              className="inline-flex rounded-xl border border-cyan-300/30 bg-cyan-500/10 px-4 py-2 text-sm font-bold text-cyan-100 transition hover:scale-105 hover:bg-cyan-500/20"
                            >
                              Bekijk originele pagina
                            </a>
                          )}
                        </div>

                        <div className="mb-6 rounded-3xl border border-cyan-300/20 bg-cyan-500/10 p-4 backdrop-blur-md">
                          <h4 className="mb-3 text-sm font-black uppercase tracking-wider text-cyan-100">
                            Nieuwe reactie in deze sectie
                          </h4>

                          {!isExpanded ? (
                            <button
                              type="button"
                              onClick={() =>
                                setExpandedForms((prev) => ({
                                  ...prev,
                                  [groupKey]: true,
                                }))
                              }
                              className="w-full rounded-full border border-white/20 bg-white/10 px-5 py-3 text-left text-white/70 transition hover:bg-white/15 hover:text-white"
                            >
                              Schrijf een reactie...
                            </button>
                          ) : (
                            <form
                              onSubmit={(e) => handleTopLevelPostSubmit(e, group)}
                              className="space-y-3"
                            >
                              <input
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                placeholder="Jouw naam..."
                                className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 outline-none focus:border-cyan-400"
                              />

                              <textarea
                                autoFocus
                                value={postValue}
                                onChange={(e) =>
                                  setNewPosts((prev) => ({
                                    ...prev,
                                    [groupKey]: e.target.value,
                                  }))
                                }
                                placeholder="Schrijf je reactie..."
                                rows={4}
                                className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 outline-none focus:border-cyan-400"
                              />

                              <div className="flex gap-2">
                                <button
                                  type="submit"
                                  className="rounded-xl bg-cyan-600 px-4 py-2 font-bold text-white transition hover:scale-105 hover:bg-cyan-700"
                                >
                                  Post
                                </button>

                                <button
                                  type="button"
                                  onClick={() =>
                                    setExpandedForms((prev) => ({
                                      ...prev,
                                      [groupKey]: false,
                                    }))
                                  }
                                  className="rounded-xl bg-white/15 px-4 py-2 font-bold text-white transition hover:scale-105 hover:bg-white/20"
                                >
                                  Annuleer
                                </button>
                              </div>
                            </form>
                          )}
                        </div>

                        <ul className="space-y-4">
                          {group.comments.map((comment) => (
                            <CommentCard
                              key={comment.id}
                              comment={comment}
                              replyToId={replyToId}
                              replyToContent={replyToContent}
                              replyContent={replyContent}
                              setReplyToId={setReplyToId}
                              setReplyToContent={setReplyToContent}
                              setReplyContent={setReplyContent}
                              userName={userName}
                              setUserName={setUserName}
                              handleReplySubmit={handleReplySubmit}
                              cancelReply={cancelReply}
                              likedComments={likedComments}
                              toggleLike={toggleLike}
                              isAdmin={isAdmin}
                              refreshComments={fetchComments}
                            />
                          ))}
                        </ul>
                      </section>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          <Navigation />
        </div>
      </div>
    </>
  );
}