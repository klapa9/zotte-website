const LevenBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {/* Deep living base */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#0f766e_0%,transparent_22%),radial-gradient(circle_at_80%_15%,#1d4ed8_0%,transparent_24%),radial-gradient(circle_at_50%_80%,#6d28d9_0%,transparent_26%),linear-gradient(135deg,#020617_0%,#06111f_20%,#082f49_45%,#0f3d56_65%,#172554_82%,#020617_100%)] animate-base-pulse" />

      {/* Global breathing veil */}
      <div className="absolute inset-0 opacity-100 global-breath-layer" />
      <div className="absolute inset-0 opacity-100 pulse-wash-layer" />

      {/* Huge moving color masses */}
      <div className="absolute -top-[18rem] -left-[16rem] h-[52rem] w-[52rem] rounded-full bg-cyan-400/20 blur-[120px] animate-mass-1" />
      <div className="absolute top-[-8rem] right-[-18rem] h-[56rem] w-[56rem] rounded-full bg-blue-500/18 blur-[130px] animate-mass-2" />
      <div className="absolute bottom-[-18rem] left-[0%] h-[50rem] w-[50rem] rounded-full bg-violet-500/16 blur-[120px] animate-mass-3" />
      <div className="absolute bottom-[-10rem] right-[5%] h-[42rem] w-[42rem] rounded-full bg-sky-300/14 blur-[100px] animate-mass-4" />
      <div className="absolute top-[28%] left-[36%] h-[32rem] w-[32rem] rounded-full bg-cyan-200/10 blur-[90px] animate-core-pulse" />

      {/* Living aurora sheets */}
      <div className="absolute inset-[-10%] opacity-80 mix-blend-screen aurora-sheet-1" />
      <div className="absolute inset-[-12%] opacity-65 mix-blend-screen aurora-sheet-2" />
      <div className="absolute inset-[-8%] opacity-45 mix-blend-screen aurora-sheet-3" />

      {/* Rotating energy rings */}
      <div className="absolute left-1/2 top-1/2 h-[80rem] w-[80rem] -translate-x-1/2 -translate-y-1/2 rounded-full ring-layer ring-layer-1" />
      <div className="absolute left-1/2 top-1/2 h-[58rem] w-[58rem] -translate-x-1/2 -translate-y-1/2 rounded-full ring-layer ring-layer-2" />
      <div className="absolute left-1/2 top-1/2 h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full ring-layer ring-layer-3" />

      {/* Wide flowing light rivers */}
      <div className="absolute -left-[25%] top-[8%] h-[16rem] w-[120rem] rotate-[-14deg] rounded-full bg-cyan-300/14 blur-[72px] animate-river-1" />
      <div className="absolute -right-[35%] top-[34%] h-[18rem] w-[130rem] rotate-[11deg] rounded-full bg-blue-300/14 blur-[80px] animate-river-2" />
      <div className="absolute -left-[18%] top-[58%] h-[14rem] w-[110rem] rotate-[-8deg] rounded-full bg-violet-300/10 blur-[70px] animate-river-3" />
      <div className="absolute -right-[22%] bottom-[4%] h-[18rem] w-[120rem] rotate-[7deg] rounded-full bg-sky-200/10 blur-[78px] animate-river-4" />

      {/* Big breathing center glow */}
      <div className="absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/8 blur-[80px] animate-heartbeat-glow" />

      {/* Screen-filling moving line field */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.38]"
        viewBox="0 0 1440 1400"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="lifeLineA" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.06" />
            <stop offset="30%" stopColor="#f8fafc" stopOpacity="0.34" />
            <stop offset="60%" stopColor="#e0f2fe" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.06" />
          </linearGradient>
          <linearGradient id="lifeLineB" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.04" />
            <stop offset="50%" stopColor="#dbeafe" stopOpacity="0.24" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.04" />
          </linearGradient>
        </defs>

        <g className="animate-linefield-a origin-center">
          <path
            d="M-260,1080 C0,980 210,840 360,640 C530,410 740,220 1020,90 C1210,5 1370,-50 1600,-130"
            fill="none"
            stroke="url(#lifeLineA)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M-220,1220 C20,1090 220,930 390,730 C565,515 760,360 980,250 C1180,150 1370,90 1600,0"
            fill="none"
            stroke="url(#lifeLineA)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M-170,910 C120,820 330,700 500,520 C690,320 920,185 1170,110 C1330,60 1460,20 1580,-20"
            fill="none"
            stroke="url(#lifeLineA)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M-60,1360 C180,1150 410,1010 660,870 C910,735 1110,590 1270,360 C1370,220 1450,90 1535,-20"
            fill="none"
            stroke="url(#lifeLineA)"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </g>

        <g className="animate-linefield-b origin-center">
          <path
            d="M-180,620 C80,560 340,500 620,360 C910,215 1180,120 1610,40"
            fill="none"
            stroke="url(#lifeLineB)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M-180,820 C80,760 320,700 570,540 C830,375 1060,280 1300,210 C1420,175 1510,145 1600,120"
            fill="none"
            stroke="url(#lifeLineB)"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
          <path
            d="M20,1370 C240,1240 500,1120 810,950 C1110,785 1320,570 1545,235"
            fill="none"
            stroke="url(#lifeLineB)"
            strokeWidth="1.1"
            strokeLinecap="round"
          />
          <path
            d="M-100,420 C200,410 470,360 760,230 C1070,90 1320,10 1590,-60"
            fill="none"
            stroke="url(#lifeLineB)"
            strokeWidth="1"
            strokeLinecap="round"
          />
        </g>
      </svg>

      {/* Floating spark particles */}
      <div className="absolute inset-0 particle-field particle-field-1" />
      <div className="absolute inset-0 particle-field particle-field-2" />

      {/* Fine texture */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='160' height='160' filter='url(%23n)' opacity='1'/></svg>")`,
        }}
      />
    </div>
  );
};

export default LevenBackground;