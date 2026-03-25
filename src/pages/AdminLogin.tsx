import { useState } from "react";

const API_URL = "http://localhost:3001";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

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
    } else {
      setMessage(data.error || "Login mislukt.");
    }
  };

  const handleLogout = async () => {
    const res = await fetch(`${API_URL}/admin/logout`, {
      method: "POST",
      credentials: "include",
    });

    const data = await res.json();
    setMessage(res.ok ? "Uitgelogd." : data.error || "Logout mislukt.");
  };

  const checkMe = async () => {
    const res = await fetch(`${API_URL}/admin/me`, {
      credentials: "include",
    });

    const data = await res.json();
    setMessage(data.isAdmin ? `Admin: ${data.adminUser}` : "Niet ingelogd.");
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <div className="max-w-md mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-6 space-y-4">
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

        <div className="flex gap-2">
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
        </div>

        {message && <p className="text-sm text-cyan-300">{message}</p>}
      </div>
    </div>
  );
}