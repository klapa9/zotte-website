const LevenBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#0f766e_0%,transparent_20%),radial-gradient(circle_at_80%_15%,#1d4ed8_0%,transparent_22%),radial-gradient(circle_at_50%_80%,#6d28d9_0%,transparent_24%),linear-gradient(135deg,#020617_0%,#06111f_22%,#082f49_48%,#172554_80%,#020617_100%)]" />

      {/* Eén zachte breathing veil i.p.v. meerdere overlays */}
      <div className="absolute inset-0 global-breath-layer opacity-70" />

      {/* Minder en kleinere color masses */}
      <div className="absolute -top-[12rem] -left-[10rem] h-[34rem] w-[34rem] rounded-full bg-cyan-400/16 blur-[80px] animate-mass-1" />
      <div className="absolute top-[-6rem] right-[-12rem] h-[38rem] w-[38rem] rounded-full bg-blue-500/14 blur-[90px] animate-mass-2" />
      <div className="absolute bottom-[-12rem] left-[10%] h-[34rem] w-[34rem] rounded-full bg-violet-500/12 blur-[85px] animate-mass-3" />

      {/* Eén aurora sheet i.p.v. drie */}
      <div className="absolute inset-[-8%] opacity-45 mix-blend-screen aurora-sheet-1" />

      {/* Minder ringen */}
      <div className="absolute left-1/2 top-1/2 h-[52rem] w-[52rem] -translate-x-1/2 -translate-y-1/2 rounded-full ring-layer ring-layer-1" />
      <div className="absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full ring-layer ring-layer-2" />

      {/* Eén subtiele light river i.p.v. vier */}
      <div className="absolute -left-[20%] top-[22%] h-[12rem] w-[90rem] rotate-[-10deg] rounded-full bg-cyan-300/10 blur-[56px] animate-river-1" />

      {/* Center glow */}
      <div className="absolute left-1/2 top-1/2 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/6 blur-[60px] animate-heartbeat-glow" />
    </div>
  );
};

export default LevenBackground;