import { useEffect, useMemo, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { MessageCircle } from "lucide-react";

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

type CommentItemProps = {
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
  fetchComments: () => Promise<void>;
};

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

function CommentItem({
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
  fetchComments,
}: CommentItemProps) {
  const isReplyingHere = replyToId === comment.id;
  const isLiked = !!likedComments[comment.id];
  const likesCount = comment.likesCount ?? 0;
  const createdLabel = formatDate(comment.createdAt);

  const cardClass = comment.isHidden
    ? "border-slate-400/30 bg-slate-500/10"
    : depth === 0
    ? "border-cyan-300/20 bg-white/10"
    : "border-white/10 bg-white/5";

  return (
    <li
      className={`rounded-2xl border p-4 backdrop-blur-sm shadow-[0_0_24px_rgba(255,255,255,0.04)] ${cardClass}`}
      style={{ marginLeft: depth > 0 ? `${Math.min(depth, 4) * 18}px` : 0 }}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-black text-white">{comment.userName}</span>

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
            className={`mt-2 text-sm leading-6 ${
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

                await fetchComments();
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
                const res = await fetch(`${API_URL}/comments/${comment.id}`, {
                  method: "DELETE",
                  credentials: "include",
                });

                const data = await res.json();

                if (!res.ok) {
                  alert(data.error || "Delete mislukt");
                  return;
                }

                await fetchComments();
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
            <CommentItem
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
              fetchComments={fetchComments}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

type CommentsProps = {
  postId: string;
  sectionId: string;
  sectionTitle: string;
};

export default function Comments({
  postId,
  sectionId,
  sectionTitle,
}: CommentsProps) {
  const [comments, setComments] = useState<CommentType[]>([]);
  const [userName, setUserName] = useState("");
  const [newPostContent, setNewPostContent] = useState("");
  const [open, setOpen] = useState(false);
  const [isComposerOpen, setIsComposerOpen] = useState(false);

  const [replyToId, setReplyToId] = useState<number | null>(null);
  const [replyToContent, setReplyToContent] = useState<string | null>(null);
  const [replyContent, setReplyContent] = useState("");

  const [likedComments, setLikedComments] = useState<Record<number, boolean>>(
    {}
  );
  const [isAdmin, setIsAdmin] = useState(false);

  const storageKey = useMemo(
    () => `likedComments:${postId}:${sectionId}`,
    [postId, sectionId]
  );

  const fetchComments = async () => {
    try {
      const params = new URLSearchParams({
        postId,
        sectionId,
      });

      const res = await fetch(`${API_URL}/comments?${params.toString()}`, {
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
    }
  };

  useEffect(() => {
    if (open) {
      fetchComments();
    }
  }, [postId, sectionId, isAdmin, open]);

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

    if (open) {
      checkAdmin();
    }
  }, [open]);

  useEffect(() => {
    const savedName = localStorage.getItem("userName");
    if (savedName) setUserName(savedName);
  }, []);

  useEffect(() => {
    localStorage.setItem("userName", userName);
  }, [userName]);

  useEffect(() => {
    const savedLikes = localStorage.getItem(storageKey);
    if (savedLikes) {
      setLikedComments(JSON.parse(savedLikes));
    } else {
      setLikedComments({});
    }
  }, [storageKey]);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(likedComments));
  }, [likedComments, storageKey]);

  useEffect(() => {
    if (!open) {
      setIsComposerOpen(false);
      setReplyToId(null);
      setReplyToContent(null);
      setReplyContent("");
      setNewPostContent("");
    }
  }, [open]);

  const handlePostSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!newPostContent.trim() || !userName.trim()) {
      alert("Vul alles in");
      return;
    }

    const res = await fetch(`${API_URL}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: newPostContent,
        userName,
        postId,
        sectionId,
        sectionTitle,
        parentId: null,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.error || "Post mislukt");
      return;
    }

    setNewPostContent("");
    setIsComposerOpen(false);
    await fetchComments();
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

    const res = await fetch(`${API_URL}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: replyContent,
        userName,
        postId,
        sectionId,
        sectionTitle,
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

  const cancelReply = () => {
    setReplyToId(null);
    setReplyToContent(null);
    setReplyContent("");
  };

  const updateLikeCountInTree = (
    items: CommentType[],
    commentId: number,
    delta: number
  ): CommentType[] => {
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
  };

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

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Open reacties voor ${sectionTitle}`}
        title={`Open reacties voor ${sectionTitle}`}
        className="
          inline-flex h-10 w-10 items-center justify-center
          rounded-full border border-white/20
          bg-white/10 text-white/80 backdrop-blur-md
          shadow-lg transition-all duration-300
          hover:scale-105 hover:bg-white/15 hover:text-white
          focus:outline-none focus:ring-2 focus:ring-white/40
        "
      >
        <MessageCircle className="h-5 w-5" strokeWidth={2.2} />
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="z-[120] max-w-2xl max-h-[85vh] overflow-y-auto border border-cyan-300/20 bg-gradient-to-br from-cyan-950/95 via-slate-950/95 to-blue-950/95 text-white backdrop-blur-xl">
          <DialogHeader>
            <DialogTitle className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-pink-300 to-purple-300">
              Reacties op: {sectionTitle}
            </DialogTitle>
          </DialogHeader>

          <div className="rounded-3xl border border-cyan-300/20 bg-cyan-500/10 p-4 backdrop-blur-md">
            <h4 className="mb-3 text-sm font-black uppercase tracking-wider text-cyan-100">
              Nieuwe reactie
            </h4>

            {!isComposerOpen ? (
              <button
                type="button"
                onClick={() => setIsComposerOpen(true)}
                className="w-full rounded-full border border-white/20 bg-white/10 px-5 py-3 text-left text-white/70 transition hover:bg-white/15 hover:text-white"
              >
                Schrijf een reactie...
              </button>
            ) : (
              <form onSubmit={handlePostSubmit} className="space-y-3">
                <input
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Jouw naam..."
                  className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 outline-none focus:border-cyan-400"
                />

                <textarea
                  autoFocus
                  value={newPostContent}
                  onChange={(e) => setNewPostContent(e.target.value)}
                  placeholder="Schrijf je gedachte..."
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
                    onClick={() => {
                      setIsComposerOpen(false);
                      setNewPostContent("");
                    }}
                    className="rounded-xl bg-white/15 px-4 py-2 font-bold text-white transition hover:scale-105 hover:bg-white/20"
                  >
                    Annuleer
                  </button>
                </div>
              </form>
            )}
          </div>

          <ul className="mt-6 space-y-4">
            {comments.length === 0 ? (
              <li className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
                Nog geen reacties in deze sectie.
              </li>
            ) : (
              comments.map((c) => (
                <CommentItem
                  key={c.id}
                  comment={c}
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
                  fetchComments={fetchComments}
                />
              ))
            )}
          </ul>
        </DialogContent>
      </Dialog>
    </div>
  );
}