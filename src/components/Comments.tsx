import { useEffect, useState, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function Comments({ postId }) {
  const [comments, setComments] = useState([]);
  const [content, setContent] = useState("");
  const [userName, setUserName] = useState("");
  const [open, setOpen] = useState(false);
  const [replyToId, setReplyToId] = useState(null);
  const [replyToContent, setReplyToContent] = useState(null);
  const replyRef = useRef(null);

  // Nieuw: open state per comment
  const [openReplies, setOpenReplies] = useState({});

  const fetchComments = async () => {
    const res = await fetch(
      `http://localhost:3001/comments?postId=${postId}`
    );
    const data = await res.json();
    setComments(data);
  };

  useEffect(() => {
    fetchComments();
  }, [postId]);

  useEffect(() => {
    const savedName = localStorage.getItem("userName");
    if (savedName) setUserName(savedName);
  }, []);

  useEffect(() => {
    localStorage.setItem("userName", userName);
  }, [userName]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!content || !userName) {
      alert("Vul alles in");
      return;
    }

    await fetch("http://localhost:3001/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content,
        userName,
        postId,
        parentId: replyToId,
      }),
    });

    setContent("");
    replyRef.current = null;
    setReplyToId(null);
    setReplyToContent(null);
    fetchComments();
  };

  const CommentItem = ({ comment }) => {
    const isOpen = openReplies[comment.id] || false;

    return (
      <li className="border-b pb-2">
        <strong>{comment.userName}</strong>: {comment.content}

        <div className="flex items-center space-x-2 mt-1">
          <button
            onClick={() => {
              replyRef.current = comment;
              setReplyToId(comment.id);
              setReplyToContent(comment.content);
              setOpen(true);
            }}
            className="text-sm text-blue-500"
          >
            Reply
          </button>

          {comment.replies?.length > 0 && (
            <button
              onClick={() =>
                setOpenReplies((prev) => ({
                  ...prev,
                  [comment.id]: !prev[comment.id],
                }))
              }
              className="text-sm text-gray-500"
            >
              {isOpen
                ? `− Hide replies`
                : `+ ${comment.replies.length} repl${comment.replies.length > 1 ? "ies" : "y"}`}
            </button>
          )}
        </div>

        {isOpen && comment.replies?.length > 0 && (
          <ul className="ml-4 mt-2 space-y-2">
            {comment.replies.map((r) => (
              <CommentItem key={r.id} comment={r} />
            ))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <div>
      <button
        onClick={() => {
          setReplyToId(null);
          setReplyToContent(null);
          setOpen(true);
        }}
        className="bg-green-500 text-black px-2 py-1 rounded-lg"
      >
        💭
      </button>

      <Dialog
        open={open}
        onOpenChange={(isOpen) => {
          setOpen(isOpen);
          if (!isOpen) {
            setReplyToId(null);
            setReplyToContent(null);
          }
        }}
      >
        <DialogContent className="bg-white text-black max-w-lg max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {replyToId ? `Reply op: "${replyToContent}"` : "Deel je gedachte"}
            </DialogTitle>
          </DialogHeader>

          {replyToId && (
            <div className="bg-gray-200 p-2 rounded text-sm mb-2">
              Replying to: "{replyToContent}"
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Jouw naam..."
              className="w-full p-3 rounded-lg border"
            />

            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Schrijf je gedachte..."
              rows={5}
              className="w-full p-3 rounded-lg border"
            />

            <button
              type="submit"
              className="bg-purple-600 text-white px-4 py-2 rounded-lg"
            >
              {replyToId ? "Reply" : "Post"}
            </button>
          </form>

          <ul className="space-y-4 mt-6">
            {comments.map((c) => (
              <CommentItem key={c.id} comment={c} />
            ))}
          </ul>
        </DialogContent>
      </Dialog>
    </div>
  );
}