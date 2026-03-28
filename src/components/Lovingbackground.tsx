export default function LovingBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Base */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(120,255,185,0.07),transparent_22%),radial-gradient(circle_at_78%_16%,rgba(245,223,170,0.07),transparent_18%),radial-gradient(circle_at_50%_78%,rgba(18,82,50,0.16),transparent_34%),linear-gradient(135deg,#020906_0%,#061710_26%,#0b2a1a_58%,#123624_100%)]" />

      {/* Fewer floating glows */}
      <div className="absolute -left-[10%] top-[4%] h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,rgba(120,255,185,0.08),rgba(120,255,185,0.02)_30%,transparent_64%)] blur-3xl animate-[luxuryFloatA_40s_ease-in-out_infinite]" />
      <div className="absolute right-[-8%] top-[10%] h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,rgba(245,223,170,0.08),rgba(245,223,170,0.02)_30%,transparent_64%)] blur-3xl animate-[luxuryFloatB_46s_ease-in-out_infinite]" />
      <div className="absolute left-[24%] bottom-[-12%] h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,rgba(150,255,205,0.05),rgba(150,255,205,0.015)_30%,transparent_64%)] blur-3xl animate-[luxuryFloatA_54s_ease-in-out_infinite]" />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="champagneGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(255,248,232,0.55)" />
            <stop offset="40%" stopColor="rgba(245,223,170,0.14)" />
            <stop offset="100%" stopColor="rgba(245,223,170,0)" />
          </radialGradient>

          <radialGradient id="emeraldGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(232,255,240,0.55)" />
            <stop offset="42%" stopColor="rgba(120,255,185,0.12)" />
            <stop offset="100%" stopColor="rgba(120,255,185,0)" />
          </radialGradient>

          <linearGradient id="goldLine" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,245,220,0.55)" />
            <stop offset="36%" stopColor="rgba(245,223,170,0.34)" />
            <stop offset="100%" stopColor="rgba(214,186,120,0.04)" />
          </linearGradient>

          <linearGradient id="greenLine" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(120,255,185,0.02)" />
            <stop offset="50%" stopColor="rgba(170,255,210,0.12)" />
            <stop offset="100%" stopColor="rgba(245,223,170,0.03)" />
          </linearGradient>
        </defs>

        {/* Simple central rings */}
        <g className="origin-center animate-[slowRotate_240s_linear_infinite]">
          <circle
            cx="50"
            cy="50"
            r="24"
            fill="none"
            stroke="url(#greenLine)"
            strokeWidth="0.16"
            opacity="0.26"
          />
          <circle
            cx="50"
            cy="50"
            r="14"
            fill="none"
            stroke="url(#goldLine)"
            strokeWidth="0.16"
            opacity="0.32"
          />
        </g>

        {/* One soft floral / orbital motif instead of many groups */}
        <g className="origin-center animate-[luxuryFloatA_38s_ease-in-out_infinite]" opacity="0.34">
          <circle cx="50" cy="41.5" r="8.5" fill="none" stroke="url(#goldLine)" strokeWidth="0.14" />
          <circle cx="43" cy="54" r="8.5" fill="none" stroke="url(#goldLine)" strokeWidth="0.14" />
          <circle cx="57" cy="54" r="8.5" fill="none" stroke="url(#goldLine)" strokeWidth="0.14" />
          <circle cx="50" cy="50" r="8.5" fill="none" stroke="url(#greenLine)" strokeWidth="0.14" />
        </g>

        {/* Single elegant curve, no SVG blur filter */}
        <g className="origin-center animate-[slowRotateReverse_280s_linear_infinite]" opacity="0.28">
          <path
            d="
              M 50 50
              C 55 46, 61 46, 65 50
              C 70 55, 70 63, 65 68
              C 59 74, 50 74, 44 69
              C 37 63, 37 53, 42 45
              C 49 35, 62 33, 72 40
            "
            fill="none"
            stroke="url(#goldLine)"
            strokeWidth="0.22"
            strokeLinecap="round"
          />
        </g>

        {/* Small fixed ambient glows */}
        <circle cx="18" cy="18" r="9" fill="url(#emeraldGlow)" opacity="0.1" />
        <circle cx="82" cy="20" r="10" fill="url(#champagneGlow)" opacity="0.1" />
        <circle cx="74" cy="79" r="12" fill="url(#emeraldGlow)" opacity="0.07" />
      </svg>

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.012),rgba(0,0,0,0.18))]" />

      <style jsx>{`
        @keyframes slowRotate {
          0% {
            transform: rotate(0deg) scale(1);
          }
          50% {
            transform: rotate(180deg) scale(1.01);
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
            transform: rotate(-180deg) scale(1.008);
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
            transform: translate3d(6px, -8px, 0) scale(1.015);
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
            transform: translate3d(-7px, 6px, 0) scale(1.014);
          }
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}