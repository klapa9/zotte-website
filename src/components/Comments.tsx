import { useEffect, useState } from "react";
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

  // comments ophalen
  const fetchComments = async () => {
    const res = await fetch(`http://localhost:3001/comments?postId=${postId}`);
    const data = await res.json();
    setComments(data);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  useEffect(() => {
    const savedName = localStorage.getItem("userName");
    if (savedName) setUserName(savedName);
  }, []);

  useEffect(() => {
    localStorage.setItem("userName", userName);
  }, [userName]);

  // comment posten
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
      }),
    });

    setContent("");
    fetchComments(); // refresh
  };

  return (
    <div>
        <button
            onClick={() => setOpen(true)}
            className="bg-green-500 text-black px-2 py-1 rounded-lg"
        >
            💭
        </button>

        <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-white text-black max-w-lg">
            <DialogHeader>
                <DialogTitle>Deel je gedachte</DialogTitle>
            </DialogHeader>

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
                Post
            </button>
            </form>
            <ul>
                {comments.map((c) => (
                <li key={c.id}>
                    <strong>{c.userName}</strong>: {c.content}
                </li>
                ))}
            </ul>
        </DialogContent>
        </Dialog>      
    </div>
  );
}