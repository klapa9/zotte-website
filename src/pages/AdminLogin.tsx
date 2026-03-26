import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

type AdminNotification = {
  id: number;
  type: string;
  commentId: number;
  postId: string;
  sectionTitle?: string | null;
  userName: string;
  commentContent: string;
  isRead: boolean;
  createdAt: string;
};

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [notifications, setNotifications] = useState<AdminNotification[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);

  const fetchNotifications = async () => {
    const res = await fetch(`${API_URL}/admin/notifications`, {
      credentials: "include",
    });

    if (!res.ok) return;

    const data = await res.json();
    setNotifications(data);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    const res = await fetch(`${API_URL}/admin/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    if (res.ok) {
      setMessage("Ingelogd als admin.");
      setIsAdmin(true);
      fetchNotifications();
    } else {
      setMessage(data.error || "Login mislukt.");
      setIsAdmin(false);
    }
  };

  const handleLogout = async () => {
    const res = await fetch(`${API_URL}/admin/logout`, {
      method: "POST",
      credentials: "include",
    });

    const data = await res.json();
    setMessage(res.ok ? "Uitgelogd." : data.error || "Logout mislukt.");
    setIsAdmin(false);
    setNotifications([]);
  };

  const checkMe = async () => {
    const res = await fetch(`${API_URL}/admin/me`, {
      credentials: "include",
    });

    const data = await res.json();

    if (data.isAdmin) {
      setIsAdmin(true);
      setMessage(`Admin: ${data.adminUser}`);
      fetchNotifications();
    } else {
      setIsAdmin(false);
      setMessage("Niet ingelogd.");
    }
  };

  const markAsRead = async (id: number) => {
    const res = await fetch(`${API_URL}/admin/notifications/${id}/read`, {
      method: "PATCH",
      credentials: "include",
    });

    if (!res.ok) return;

    setNotifications((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isRead: true } : item
      )
    );
  };

  const markAllAsRead = async () => {
    const res = await fetch(`${API_URL}/admin/notifications/read-all`, {
      method: "PATCH",
      credentials: "include",
    });

    if (!res.ok) return;

    setNotifications((prev) =>
      prev.map((item) => ({ ...item, isRead: true }))
    );
  };

  useEffect(() => {
    checkMe();
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 space-y-4">
          <h1 className="text-3xl font-bold">Admin login</h1>

          <form onSubmit={handleLogin} className="space-y-3">
            <input
              className="w-full p-3 rounded-lg text-black"
              placeholder="Gebruikersnaam"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="w-full p-3 rounded-lg text-black"
              type="password"
              placeholder="Wachtwoord"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              className="bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-lg"
            >
              Login
            </button>
          </form>

          <div className="flex gap-2 flex-wrap">
            <button
              onClick={checkMe}
              className="bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg"
            >
              Check admin status
            </button>

            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
            >
              Logout
            </button>

            {isAdmin && (
              <button
                onClick={fetchNotifications}
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg"
              >
                Refresh inbox
              </button>
            )}

            {isAdmin && notifications.length > 0 && (
              <button
                onClick={markAllAsRead}
                className="bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-lg"
              >
                Mark all as read
              </button>
            )}
          </div>

          {message && <p className="text-sm text-cyan-300">{message}</p>}
        </div>

        {isAdmin && (
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-4">Admin inbox</h2>

            {notifications.length === 0 ? (
              <p className="text-slate-300">Nog geen notificaties.</p>
            ) : (
              <div className="space-y-4">
                {notifications.map((item) => (
                  <div
                    key={item.id}
                    className={`rounded-xl border p-4 ${
                      item.isRead
                        ? "border-white/10 bg-white/5"
                        : "border-cyan-400/40 bg-cyan-500/10"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-sm text-cyan-300">
                          {new Date(item.createdAt).toLocaleString()}
                        </div>

                        <div className="mt-2 text-lg font-semibold">
                          {item.sectionTitle || item.postId}
                        </div>

                        <div className="text-sm text-slate-300 mt-1">
                          <strong>postId:</strong> {item.postId}
                        </div>

                        <div className="text-sm text-slate-300 mt-1">
                          <strong>Gebruiker:</strong> {item.userName}
                        </div>

                        <div className="text-sm text-white mt-3">
                          <strong>Comment:</strong> {item.commentContent}
                        </div>
                      </div>

                      {!item.isRead && (
                        <button
                          onClick={() => markAsRead(item.id)}
                          className="bg-cyan-600 hover:bg-cyan-700 px-3 py-2 rounded-lg text-sm"
                        >
                          Mark as read
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}