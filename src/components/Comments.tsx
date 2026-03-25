import { useEffect, useMemo, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { MessageCircle } from "lucide-react";

const API_URL = "http://localhost:3001";

type CommentType = {
  id: number;
  content: string;
  userName: string;
  postId: string;
  parentId: number | null;
  likesCount?: number;
  isHidden?: boolean;
  replies?: CommentType[];
};

type CommentItemProps = {
  comment: CommentType;
  openReplies: Record<number, boolean>;
  toggleReplies: (commentId: number) => void;
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

function CommentItem({
  comment,
  openReplies,
  toggleReplies,
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
  const isOpen = openReplies[comment.id] || false;
  const hasReplies = !!comment.replies?.length;
  const isReplyingHere = replyToId === comment.id;
  const isLiked = !!likedComments[comment.id];
  const likesCount = comment.likesCount ?? 0;

  return (
    <li
      className={`border-b pb-3 ${
        comment.isHidden
          ? "bg-slate-100 border border-dashed border-slate-400 rounded-md p-3"
          : ""
      }`}
    >
      <div className={`text-sm ${comment.isHidden ? "text-slate-500" : ""}`}>
        <strong>{comment.userName}</strong>:{" "}
        {comment.isHidden ? "[Verborgen comment] " : ""}
        {comment.content}
      </div>

      {comment.isHidden && isAdmin && (
        <div className="text-xs text-red-500 mt-1">Verborgen voor bezoekers</div>
      )}

      <div className="flex items-center gap-3 mt-2 flex-wrap">
        <button
          type="button"
          onClick={() => {
            setReplyToId(comment.id);
            setReplyToContent(comment.content);
            setReplyContent("");
          }}
          className="text-sm text-blue-500"
        >
          Reply
        </button>

        <button
          type="button"
          onClick={() => toggleLike(comment.id, isLiked)}
          className={`text-sm flex items-center gap-1 ${
            isLiked ? "text-red-500" : "text-gray-500"
          }`}
        >
          <span>{isLiked ? "❤️" : "🤍"}</span>
          <span>{likesCount}</span>
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
              className={`text-sm ${
                comment.isHidden ? "text-green-500" : "text-red-400"
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
              className="text-sm text-red-500"
            >
              Delete
            </button>
          </>
        )}

        {hasReplies && (
          <button
            type="button"
            onClick={() => toggleReplies(comment.id)}
            className="text-sm text-gray-500"
          >
            {isOpen
              ? "− Hide replies"
              : `+ ${comment.replies!.length} repl${
                  comment.replies!.length > 1 ? "ies" : "y"
                }`}
          </button>
        )}
      </div>

      {isReplyingHere && (
        <div className="mt-3 ml-4 p-3 rounded-lg bg-gray-100 border">
          <div className="text-xs text-gray-600 mb-2">
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
              className="w-full p-3 rounded-lg border text-black"
            />

            <textarea
              autoFocus
              value={replyContent}
              onChange={(e) => setReplyContent(e.target.value)}
              placeholder="Schrijf je reply..."
              rows={4}
              className="w-full p-3 rounded-lg border text-black"
            />

            <div className="flex gap-2">
              <button
                type="submit"
                className="bg-purple-600 text-white px-4 py-2 rounded-lg"
              >
                Reply
              </button>

              <button
                type="button"
                onClick={cancelReply}
                className="bg-gray-300 text-black px-4 py-2 rounded-lg"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {hasReplies && isOpen && (
        <ul className="ml-4 mt-3 space-y-2">
          {comment.replies!.map((r) => (
            <CommentItem
              key={r.id}
              comment={r}
              openReplies={openReplies}
              toggleReplies={toggleReplies}
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
};

export default function Comments({ postId }: CommentsProps) {
  const [comments, setComments] = useState<CommentType[]>([]);
  const [userName, setUserName] = useState("");
  const [newPostContent, setNewPostContent] = useState("");
  const [open, setOpen] = useState(false);

  const [replyToId, setReplyToId] = useState<number | null>(null);
  const [replyToContent, setReplyToContent] = useState<string | null>(null);
  const [replyContent, setReplyContent] = useState("");

  const [openReplies, setOpenReplies] = useState<Record<number, boolean>>({});
  const [likedComments, setLikedComments] = useState<Record<number, boolean>>(
    {}
  );
  const [isAdmin, setIsAdmin] = useState(false);

  const storageKey = useMemo(() => `likedComments:${postId}`, [postId]);

  const fetchComments = async () => {
    const res = await fetch(`${API_URL}/comments?postId=${postId}`, {
      credentials: "include",
      cache: "no-store",
    });

    const data = await res.json();
    setComments(data);
  };

  useEffect(() => {
    fetchComments();
  }, [postId, isAdmin]);

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
        parentId: null,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.error || "Post mislukt");
      return;
    }

    setNewPostContent("");
    fetchComments();
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
        parentId,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.error || "Reply mislukt");
      return;
    }

    setOpenReplies((prev) => ({
      ...prev,
      [parentId]: true,
    }));

    setReplyContent("");
    setReplyToId(null);
    setReplyToContent(null);
    fetchComments();
  };

  const cancelReply = () => {
    setReplyToId(null);
    setReplyToContent(null);
    setReplyContent("");
  };

  const toggleReplies = (commentId: number) => {
    setOpenReplies((prev) => ({
      ...prev,
      [commentId]: !prev[commentId],
    }));
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
        aria-label="Open reacties"
        title="Open reacties"
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
        <DialogContent className="z-[120] bg-white text-black max-w-lg max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Deel je gedachte</DialogTitle>
          </DialogHeader>

          <form onSubmit={handlePostSubmit} className="space-y-4">
            <input
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Jouw naam..."
              className="w-full p-3 rounded-lg border"
            />

            <textarea
              value={newPostContent}
              onChange={(e) => setNewPostContent(e.target.value)}
              placeholder="Schrijf je gedachte..."
              rows={5}
              className="w-full p-3 rounded-lg border"
            />

            <button
              type="submit"
              className="bg-purple-600 text-white px-4 py-2 rounded-lg"
            >
              Post
            </button>
          </form>

          <ul className="space-y-4 mt-6">
            {comments.map((c) => (
              <CommentItem
                key={c.id}
                comment={c}
                openReplies={openReplies}
                toggleReplies={toggleReplies}
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
        </DialogContent>
      </Dialog>
    </div>
  );
}