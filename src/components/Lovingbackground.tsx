export default function LovingBackground() {
  const goldenAngle = 137.50776405;

  const particles = Array.from({ length: 72 }, (_, i) => {
    const t = i / 71;
    const angle = (i * goldenAngle * Math.PI) / 180;
    const radius = Math.pow(t, 0.9) * 40;

    return {
      x: 50 + Math.cos(angle) * radius,
      y: 50 + Math.sin(angle) * radius,
      r: 0.28 + (1 - t) * 1.15,
      opacity: 0.05 + (1 - t) * 0.16,
      delay: `${(i % 12) * 0.45}s`,
      duration: `${9 + (i % 6)}s`,
      fill:
        i % 6 === 0
          ? `rgba(245, 223, 170, ${0.08 + (1 - t) * 0.14})`
          : i % 4 === 0
          ? `rgba(220, 255, 235, ${0.06 + (1 - t) * 0.12})`
          : `rgba(120, 255, 185, ${0.04 + (1 - t) * 0.1})`,
    };
  });

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(120,255,185,0.08),transparent_24%),radial-gradient(circle_at_78%_16%,rgba(245,223,170,0.08),transparent_20%),radial-gradient(circle_at_50%_78%,rgba(18,82,50,0.18),transparent_38%),linear-gradient(135deg,#020906_0%,#061710_24%,#0b2a1a_55%,#123624_100%)]" />

      <div className="absolute -left-[12%] top-[2%] h-[54rem] w-[54rem] rounded-full bg-[radial-gradient(circle,rgba(120,255,185,0.10),rgba(120,255,185,0.03)_28%,transparent_64%)] blur-3xl animate-[luxuryFloatA_38s_ease-in-out_infinite]" />
      <div className="absolute right-[-10%] top-[8%] h-[42rem] w-[42rem] rounded-full bg-[radial-gradient(circle,rgba(245,223,170,0.10),rgba(245,223,170,0.03)_28%,transparent_64%)] blur-3xl animate-[luxuryFloatB_44s_ease-in-out_infinite]" />
      <div className="absolute left-[26%] bottom-[-18%] h-[44rem] w-[44rem] rounded-full bg-[radial-gradient(circle,rgba(150,255,205,0.07),rgba(150,255,205,0.02)_28%,transparent_64%)] blur-3xl animate-[luxuryFloatA_52s_ease-in-out_infinite]" />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="champagneGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(255,248,232,0.7)" />
            <stop offset="38%" stopColor="rgba(245,223,170,0.16)" />
            <stop offset="100%" stopColor="rgba(245,223,170,0)" />
          </radialGradient>

          <radialGradient id="emeraldGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(232,255,240,0.7)" />
            <stop offset="42%" stopColor="rgba(120,255,185,0.14)" />
            <stop offset="100%" stopColor="rgba(120,255,185,0)" />
          </radialGradient>

          <linearGradient id="goldLine" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,245,220,0.7)" />
            <stop offset="32%" stopColor="rgba(245,223,170,0.5)" />
            <stop offset="72%" stopColor="rgba(214,186,120,0.18)" />
            <stop offset="100%" stopColor="rgba(214,186,120,0.03)" />
          </linearGradient>

          <linearGradient id="greenLine" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(120,255,185,0.02)" />
            <stop offset="50%" stopColor="rgba(170,255,210,0.16)" />
            <stop offset="100%" stopColor="rgba(245,223,170,0.03)" />
          </linearGradient>

          <filter id="softGlow">
            <feGaussianBlur stdDeviation="0.32" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g className="origin-center animate-[slowRotate_220s_linear_infinite]">
          <circle
            cx="50"
            cy="50"
            r="28"
            fill="none"
            stroke="url(#greenLine)"
            strokeWidth="0.16"
            opacity="0.34"
          />
          <circle
            cx="50"
            cy="50"
            r="18"
            fill="none"
            stroke="url(#goldLine)"
            strokeWidth="0.16"
            opacity="0.4"
          />
          <circle
            cx="50"
            cy="50"
            r="9.5"
            fill="none"
            stroke="url(#greenLine)"
            strokeWidth="0.14"
            opacity="0.28"
          />
        </g>

        <g className="origin-center animate-[luxuryFloatA_34s_ease-in-out_infinite]" opacity="0.42">
          <circle cx="50" cy="40.5" r="10" fill="none" stroke="url(#goldLine)" strokeWidth="0.14" />
          <circle cx="41.8" cy="55" r="10" fill="none" stroke="url(#goldLine)" strokeWidth="0.14" />
          <circle cx="58.2" cy="55" r="10" fill="none" stroke="url(#goldLine)" strokeWidth="0.14" />
          <circle cx="50" cy="50" r="10" fill="none" stroke="url(#greenLine)" strokeWidth="0.14" />
          <circle cx="50" cy="50" r="20.2" fill="none" stroke="url(#greenLine)" strokeWidth="0.12" opacity="0.26" />
        </g>

        <g className="origin-center animate-[slowRotateReverse_260s_linear_infinite]" opacity="0.46">
          <path
            d="
              M 50 50
              C 55 46, 61 46, 65 50
              C 70 55, 70 63, 65 68
              C 59 74, 50 74, 44 69
              C 37 63, 37 53, 42 45
              C 49 35, 62 33, 72 40
              C 83 48, 85 64, 78 76
            "
            fill="none"
            stroke="url(#goldLine)"
            strokeWidth="0.26"
            strokeLinecap="round"
            filter="url(#softGlow)"
          />
        </g>

        <g
          transform="translate(12 12) scale(0.92)"
          className="origin-center animate-[luxuryFloatB_42s_ease-in-out_infinite]"
          opacity="0.32"
        >
          <rect x="0" y="0" width="8" height="8" rx="1" fill="none" stroke="rgba(245,223,170,0.18)" strokeWidth="0.12" />
          <rect x="8" y="0" width="13" height="8" rx="1" fill="none" stroke="rgba(245,223,170,0.16)" strokeWidth="0.12" />
          <rect x="8" y="8" width="13" height="13" rx="1" fill="none" stroke="rgba(245,223,170,0.15)" strokeWidth="0.12" />
          <rect x="-13" y="8" width="21" height="13" rx="1" fill="none" stroke="rgba(245,223,170,0.12)" strokeWidth="0.12" />
          <rect x="-13" y="-13" width="21" height="21" rx="1.1" fill="none" stroke="rgba(245,223,170,0.10)" strokeWidth="0.12" />

          <path
            d="
              M 8 8
              A 8 8 0 0 0 16 0
              A 13 13 0 0 1 29 13
              A 21 21 0 0 1 8 34
            "
            fill="none"
            stroke="url(#goldLine)"
            strokeWidth="0.22"
            strokeLinecap="round"
          />
        </g>

        <g
          transform="translate(70 58) scale(0.88)"
          className="origin-center animate-[luxuryFloatA_48s_ease-in-out_infinite]"
          opacity="0.18"
        >
          <circle cx="0" cy="0" r="8" fill="none" stroke="rgba(170,255,210,0.18)" strokeWidth="0.12" />
          <circle cx="8" cy="0" r="8" fill="none" stroke="rgba(170,255,210,0.14)" strokeWidth="0.12" />
          <circle cx="4" cy="6.8" r="8" fill="none" stroke="rgba(245,223,170,0.12)" strokeWidth="0.12" />
        </g>

        <g className="origin-center animate-[particleDrift_60s_ease-in-out_infinite]">
          {particles.map((p, i) => (
            <circle
              key={i}
              cx={p.x}
              cy={p.y}
              r={p.r}
              fill={p.fill}
              style={{
                animation: `particlePulse ${p.duration} ease-in-out ${p.delay} infinite`,
                transformOrigin: "50% 50%",
              }}
            />
          ))}
        </g>

        <circle cx="18" cy="18" r="10" fill="url(#emeraldGlow)" opacity="0.12" />
        <circle cx="82" cy="20" r="11" fill="url(#champagneGlow)" opacity="0.12" />
        <circle cx="74" cy="79" r="14" fill="url(#emeraldGlow)" opacity="0.08" />
        <circle cx="32" cy="72" r="9" fill="url(#champagneGlow)" opacity="0.08" />
      </svg>

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.015),rgba(0,0,0,0.18))]" />

      <style jsx>{`
        @keyframes slowRotate {
          0% {
            transform: rotate(0deg) scale(1);
          }
          50% {
            transform: rotate(180deg) scale(1.015);
          }
          100% {
            transform: rotate(360deg) scale(1);
          }
        }

        @keyframes slowRotateReverse {
          0% {
            transform: rotate(0deg) scale(1);
          }
          50% {
            transform: rotate(-180deg) scale(1.01);
          }
          100% {
            transform: rotate(-360deg) scale(1);
          }
        }

        @keyframes luxuryFloatA {
          0% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(8px, -10px, 0) scale(1.02);
          }
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
        }

        @keyframes luxuryFloatB {
          0% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(-9px, 8px, 0) scale(1.018);
          }
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
        }

        @keyframes particleDrift {
          0% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          25% {
            transform: translate3d(0.35%, -0.45%, 0) scale(1.006);
          }
          50% {
            transform: translate3d(-0.5%, 0.6%, 0) scale(1.012);
          }
          75% {
            transform: translate3d(0.45%, 0.35%, 0) scale(1.006);
          }
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
        }

        @keyframes particlePulse {
          0%,
          100% {
            opacity: 0.32;
            transform: scale(1);
          }
          50% {
            opacity: 0.78;
            transform: scale(1.45);
          }
        }
      `}</style>
    </div>
  );
}