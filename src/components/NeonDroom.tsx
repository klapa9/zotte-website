import { useMemo } from "react";

type MistBlob = {
  id: number;
  top: string;
  left: string;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
};

type DriftRing = {
  id: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
};

export default function Neondroom() {
  const mistBlobs = useMemo<MistBlob[]>(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: 220 + Math.random() * 360,
        duration: 18 + Math.random() * 200,
        delay: Math.random() * 10,
        opacity: 0.1 + Math.random() * 0.12,
      })),
    []
  );

  const driftRings = useMemo<DriftRing[]>(
    () =>
      Array.from({ length: 6 }, (_, i) => ({
        id: i,
        size: 60 + i * 12,
        duration: 16 + i * 4,
        delay: i * 1.2,
        opacity: 0.08 + i * 0.015,
      })),
    []
  );

  return (
    <>
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#121733]">
        <div className="absolute inset-[-18%] animate-[dreamTint_24s_ease-in-out_infinite]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(165,180,252,0.30),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(192,132,252,0.24),transparent_26%),radial-gradient(circle_at_76%_78%,rgba(216,180,254,0.24),transparent_28%),radial-gradient(circle_at_22%_80%,rgba(186,230,253,0.22),transparent_28%),radial-gradient(circle_at_50%_45%,rgba(255,255,255,0.08),transparent_24%),linear-gradient(180deg,rgba(30,41,90,0.52),rgba(15,23,55,0.82))]" />
        </div>

        <div className="absolute inset-0 opacity-[0.35]">
          <div className="absolute left-[-10%] top-[-8%] h-[42rem] w-[42rem] rounded-full bg-indigo-300/20 blur-3xl animate-[blobFloatA_28s_ease-in-out_infinite]" />
          <div className="absolute right-[-12%] top-[8%] h-[34rem] w-[34rem] rounded-full bg-violet-300/20 blur-3xl animate-[blobFloatB_32s_ease-in-out_infinite]" />
          <div className="absolute left-[8%] bottom-[-14%] h-[38rem] w-[38rem] rounded-full bg-sky-200/20 blur-3xl animate-[blobFloatC_30s_ease-in-out_infinite]" />
          <div className="absolute right-[10%] bottom-[-12%] h-[30rem] w-[30rem] rounded-full bg-fuchsia-200/15 blur-3xl animate-[blobFloatD_26s_ease-in-out_infinite]" />
        </div>

        <div className="absolute left-1/2 top-1/2 h-[135vmax] w-[135vmax] -translate-x-1/2 -translate-y-1/2 opacity-26">
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),rgba(196,181,253,0.07),rgba(165,180,252,0.05),transparent_70%)] blur-3xl animate-[slowPulse_14s_ease-in-out_infinite]" />
          <div className="absolute inset-[8%] rounded-full bg-[radial-gradient(circle_at_center,rgba(191,219,254,0.08),rgba(216,180,254,0.06),transparent_72%)] blur-3xl animate-[slowPulse_18s_ease-in-out_infinite_reverse]" />
          <div className="absolute inset-[16%] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),rgba(165,180,252,0.06),transparent_72%)] blur-3xl animate-[slowPulse_22s_ease-in-out_infinite]" />
        </div>

        <div className="absolute left-1/2 top-1/2 h-[150vmax] w-[150vmax] -translate-x-1/2 -translate-y-1/2 opacity-22 animate-[spinDriftA_90s_linear_infinite]">
          <svg
            className="h-full w-full"
            viewBox="0 0 1200 1200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#glowWaveA)">
              {Array.from({ length: 9 }).map((_, i) => (
                <path
                  key={i}
                  d={`
                    M 600 ${170 + i * 24}
                    C ${760 + i * 18} ${240 + i * 28},
                      ${850 - i * 6} ${410 + i * 30},
                      ${710 + i * 14} ${560 + i * 22}
                    C ${600 + i * 8} ${690 + i * 22},
                      ${460 - i * 16} ${760 - i * 6},
                      ${360 - i * 8} ${920 - i * 12}
                    C ${320 - i * 10} ${740 - i * 20},
                      ${400 + i * 4} ${560 - i * 12},
                      ${510 - i * 14} ${420 - i * 10}
                    C ${620 + i * 6} ${280 - i * 2},
                      ${540 - i * 18} ${200 + i * 8},
                      600 ${170 + i * 24}
                  `}
                  stroke={
                    i % 3 === 0
                      ? "rgba(255,215,160,0.22)"
                      : i % 3 === 1
                      ? "rgba(196,181,253,0.20)"
                      : "rgba(186,230,253,0.20)"
                  }
                  strokeWidth={2 + i * 0.35}
                  strokeLinecap="round"
                />
              ))}
            </g>
            <defs>
              <filter id="glowWaveA">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
          </svg>
        </div>

        <div className="absolute left-1/2 top-1/2 h-[132vmax] w-[132vmax] -translate-x-1/2 -translate-y-1/2 opacity-18 animate-[spinDriftB_68s_linear_infinite]">
          <svg
            className="h-full w-full"
            viewBox="0 0 1200 1200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#glowWaveB)">
              {Array.from({ length: 8 }).map((_, i) => (
                <path
                  key={i}
                  d={`
                    M 190 ${600 + i * 10}
                    C ${300 + i * 20} ${430 - i * 22},
                      ${500 - i * 14} ${350 + i * 10},
                      ${620 + i * 24} ${470 - i * 18}
                    C ${780 - i * 10} ${620 + i * 20},
                      ${910 - i * 16} ${720 - i * 16},
                      ${1020 - i * 12} ${560 + i * 12}
                    C ${900 - i * 14} ${820 + i * 14},
                      ${700 + i * 8} ${860 - i * 8},
                      ${530 - i * 14} ${740 + i * 16}
                    C ${360 + i * 10} ${620 - i * 8},
                      ${270 - i * 8} ${760 - i * 12},
                      190 ${600 + i * 10}
                  `}
                  stroke={
                    i % 2 === 0
                      ? "rgba(216,180,254,0.18)"
                      : "rgba(165,180,252,0.18)"
                  }
                  strokeWidth={2.2 + i * 0.32}
                  strokeLinecap="round"
                />
              ))}
            </g>
            <defs>
              <filter id="glowWaveB">
                <feGaussianBlur stdDeviation="10" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
          </svg>
        </div>

        <div className="absolute left-1/2 top-1/2 h-[118vmax] w-[118vmax] -translate-x-1/2 -translate-y-1/2 opacity-24 animate-[spinDriftC_48s_linear_infinite]">
          <svg
            className="h-full w-full"
            viewBox="0 0 1200 1200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#glowWaveC)">
              {Array.from({ length: 12 }).map((_, i) => (
                <path
                  key={i}
                  d={`
                    M 600 220
                    C ${670 + i * 8} 280,
                      ${720 + i * 10} 360,
                      ${690 + i * 12} 470
                    C ${660 - i * 5} 590,
                      ${740 + i * 10} 690,
                      ${820 - i * 8} 760
                    C ${720 + i * 4} 770,
                      ${640 - i * 10} 820,
                      600 950
                    C ${560 + i * 10} 820,
                      ${480 - i * 4} 770,
                      ${380 + i * 8} 760
                    C ${460 - i * 10} 690,
                      ${540 + i * 5} 590,
                      ${510 - i * 12} 470
                    C ${480 - i * 10} 360,
                      ${530 - i * 8} 280,
                      600 220
                  `}
                  stroke={
                    i % 4 === 0
                      ? "rgba(255,255,255,0.15)"
                      : i % 4 === 1
                      ? "rgba(165,180,252,0.16)"
                      : i % 4 === 2
                      ? "rgba(196,181,253,0.14)"
                      : "rgba(186,230,253,0.14)"
                  }
                  strokeWidth={1.8 + i * 0.22}
                  strokeLinecap="round"
                />
              ))}
            </g>
            <defs>
              <filter id="glowWaveC">
                <feGaussianBlur stdDeviation="7" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
          </svg>
        </div>

        <div className="absolute left-1/2 top-1/2 h-[102vmax] w-[102vmax] -translate-x-1/2 -translate-y-1/2 opacity-20 animate-[breatheRotate_20s_ease-in-out_infinite]">
          {driftRings.map((ring) => (
            <div
              key={ring.id}
              className="absolute left-1/2 top-1/2 rounded-full border border-white/10"
              style={{
                width: `${ring.size}%`,
                height: `${ring.size}%`,
                opacity: ring.opacity,
                transform: "translate(-50%, -50%)",
                animation: `ringWave ${ring.duration}s ease-in-out ${ring.delay}s infinite`,
                boxShadow:
                  "0 0 45px rgba(165,180,252,0.08), inset 0 0 35px rgba(255,255,255,0.04)",
                borderColor:
                  ring.id % 3 === 0
                    ? "rgba(165,180,252,0.10)"
                    : ring.id % 3 === 1
                    ? "rgba(196,181,253,0.10)"
                    : "rgba(186,230,253,0.10)",
              }}
            />
          ))}
        </div>

        {mistBlobs.map((blob) => (
          <div
            key={blob.id}
            className="absolute rounded-full mix-blend-screen animate-[mistWander_linear_infinite]"
            style={{
              top: blob.top,
              left: blob.left,
              width: blob.size,
              height: blob.size,
              opacity: blob.opacity,
              animationDuration: `${blob.duration}s`,
              animationDelay: `${blob.delay}s`,
              transform: "translate(-50%, -50%)",
              background:
                "radial-gradient(circle at 35% 35%, rgba(255,255,255,0.24), rgba(165,180,252,0.16), rgba(196,181,253,0.14), rgba(186,230,253,0.14), transparent 68%)",
              filter: "blur(70px)",
            }}
          />
        ))}

        <div className="absolute inset-0 opacity-[0.12] animate-[veilFlow_26s_ease-in-out_infinite]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.06),transparent_62%)]" />
          <div className="absolute inset-0 bg-[repeating-radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0px,rgba(255,255,255,0.015)_3px,transparent_12px,transparent_34px)]" />
        </div>

        <div className="absolute inset-0 opacity-[0.08] animate-[grainLift_22s_linear_infinite]">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.03)_0px,rgba(255,255,255,0.008)_1px,transparent_3px,transparent_8px)]" />
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,transparent_28%,rgba(10,14,35,0.12)_58%,rgba(8,10,24,0.28)_100%)]" />
      </div>

      <style>{`
        @keyframes spinDriftA {
          0% {
            transform: translate(-50%, -50%) rotate(0deg) scale(1);
          }
          50% {
            transform: translate(-50%, -50%) rotate(180deg) scale(1.06);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg) scale(1);
          }
        }

        @keyframes spinDriftB {
          0% {
            transform: translate(-50%, -50%) rotate(360deg) scale(1.04);
          }
          50% {
            transform: translate(-50%, -50%) rotate(180deg) scale(0.96);
          }
          100% {
            transform: translate(-50%, -50%) rotate(0deg) scale(1.04);
          }
        }

        @keyframes spinDriftC {
          0% {
            transform: translate(-50%, -50%) rotate(0deg) scale(0.96);
          }
          50% {
            transform: translate(-50%, -50%) rotate(-180deg) scale(1.05);
          }
          100% {
            transform: translate(-50%, -50%) rotate(-360deg) scale(0.96);
          }
        }

        @keyframes breatheRotate {
          0%, 100% {
            transform: translate(-50%, -50%) scale(0.96) rotate(0deg);
          }
          50% {
            transform: translate(-50%, -50%) scale(1.05) rotate(8deg);
          }
        }

        @keyframes ringWave {
          0%, 100% {
            transform: translate(-50%, -50%) scale(0.94);
            opacity: 0.08;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.04);
            opacity: 0.16;
          }
        }

        @keyframes mistWander {
          0% {
            transform: translate(-50%, -50%) translate3d(0, 0, 0) scale(1) rotate(0deg);
          }
          20% {
            transform: translate(-50%, -50%) translate3d(55px, -35px, 0) scale(1.08) rotate(18deg);
          }
          40% {
            transform: translate(-50%, -50%) translate3d(-45px, 40px, 0) scale(0.94) rotate(40deg);
          }
          60% {
            transform: translate(-50%, -50%) translate3d(30px, 55px, 0) scale(1.04) rotate(66deg);
          }
          80% {
            transform: translate(-50%, -50%) translate3d(-32px, -46px, 0) scale(0.97) rotate(120deg);
          }
          100% {
            transform: translate(-50%, -50%) translate3d(0, 0, 0) scale(1) rotate(180deg);
          }
        }

        @keyframes slowPulse {
          0%, 100% {
            transform: scale(0.96);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.06);
            opacity: 0.34;
          }
        }

        @keyframes blobFloatA {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(60px, 30px, 0) scale(1.08);
          }
        }

        @keyframes blobFloatB {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(-50px, 50px, 0) scale(1.1);
          }
        }

        @keyframes blobFloatC {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(40px, -60px, 0) scale(1.06);
          }
        }

        @keyframes blobFloatD {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(-35px, -35px, 0) scale(1.07);
          }
        }

        @keyframes veilFlow {
          0%, 100% {
            transform: scale(1.02) translate3d(0, 0, 0);
            opacity: 0.08;
          }
          33% {
            transform: scale(1.06) translate3d(-18px, 14px, 0);
            opacity: 0.14;
          }
          66% {
            transform: scale(1.04) translate3d(20px, -12px, 0);
            opacity: 0.11;
          }
        }

        @keyframes grainLift {
          0% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-14px) scale(1.02);
          }
          100% {
            transform: translateY(0) scale(1);
          }
        }

        @keyframes dreamTint {
          0% {
            filter: hue-rotate(0deg) saturate(1);
          }
          50% {
            filter: hue-rotate(14deg) saturate(1.08);
          }
          100% {
            filter: hue-rotate(0deg) saturate(1);
          }
        }
      `}</style>
    </>
  );
}