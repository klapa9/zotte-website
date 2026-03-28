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

export default function Neondroom() {
  const mistBlobs = useMemo<MistBlob[]>(
    () =>
      Array.from({ length: 6 }, (_, i) => ({
        id: i,
        top: `${10 + Math.random() * 80}%`,
        left: `${10 + Math.random() * 80}%`,
        size: 180 + Math.random() * 180,
        duration: 28 + Math.random() * 18,
        delay: Math.random() * 8,
        opacity: 0.08 + Math.random() * 0.08,
      })),
    []
  );

  return (
    <>
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#121733]">
        {/* Basis sfeerlaag */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(165,180,252,0.22),transparent_26%),radial-gradient(circle_at_82%_18%,rgba(192,132,252,0.18),transparent_24%),radial-gradient(circle_at_76%_78%,rgba(216,180,254,0.16),transparent_26%),radial-gradient(circle_at_22%_80%,rgba(186,230,253,0.14),transparent_26%),linear-gradient(180deg,rgba(30,41,90,0.42),rgba(15,23,55,0.82))]" />
        </div>

        {/* 3 grote zachte blobs behouden */}
        <div className="absolute inset-0 opacity-[0.32]">
          <div className="absolute left-[-10%] top-[-8%] h-[34rem] w-[34rem] rounded-full bg-indigo-300/18 blur-3xl animate-[blobFloatA_30s_ease-in-out_infinite]" />
          <div className="absolute right-[-12%] top-[10%] h-[28rem] w-[28rem] rounded-full bg-violet-300/16 blur-3xl animate-[blobFloatB_34s_ease-in-out_infinite]" />
          <div className="absolute left-[10%] bottom-[-14%] h-[30rem] w-[30rem] rounded-full bg-sky-200/16 blur-3xl animate-[blobFloatC_32s_ease-in-out_infinite]" />
        </div>

        {/* 1 centrale glow i.p.v. 3 pulse-lagen */}
        <div className="absolute left-1/2 top-1/2 h-[110vmax] w-[110vmax] -translate-x-1/2 -translate-y-1/2 opacity-20">
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),rgba(196,181,253,0.05),rgba(165,180,252,0.04),transparent_72%)] blur-3xl animate-[slowPulse_18s_ease-in-out_infinite]" />
        </div>

        {/* Minder mist blobs, zonder mix-blend-screen */}
        {mistBlobs.map((blob) => (
          <div
            key={blob.id}
            className="absolute rounded-full animate-[mistWander_linear_infinite]"
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
                "radial-gradient(circle at 35% 35%, rgba(255,255,255,0.14), rgba(165,180,252,0.10), rgba(196,181,253,0.08), transparent 70%)",
              filter: "blur(42px)",
            }}
          />
        ))}

        {/* Statische lichte textuur, niet meer geanimeerd */}
        <div className="absolute inset-0 opacity-[0.05]">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.02)_0px,rgba(255,255,255,0.006)_1px,transparent_3px,transparent_8px)]" />
        </div>

        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,transparent_30%,rgba(10,14,35,0.10)_58%,rgba(8,10,24,0.26)_100%)]" />
      </div>

      <style>{`
        @keyframes mistWander {
          0% {
            transform: translate(-50%, -50%) translate3d(0, 0, 0) scale(1);
          }
          25% {
            transform: translate(-50%, -50%) translate3d(22px, -16px, 0) scale(1.04);
          }
          50% {
            transform: translate(-50%, -50%) translate3d(-18px, 18px, 0) scale(0.97);
          }
          75% {
            transform: translate(-50%, -50%) translate3d(14px, 20px, 0) scale(1.02);
          }
          100% {
            transform: translate(-50%, -50%) translate3d(0, 0, 0) scale(1);
          }
        }

        @keyframes slowPulse {
          0%, 100% {
            transform: scale(0.98);
            opacity: 0.18;
          }
          50% {
            transform: scale(1.04);
            opacity: 0.28;
          }
        }

        @keyframes blobFloatA {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(36px, 20px, 0) scale(1.05);
          }
        }

        @keyframes blobFloatB {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(-28px, 28px, 0) scale(1.06);
          }
        }

        @keyframes blobFloatC {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(24px, -32px, 0) scale(1.04);
          }
        }
      `}</style>
    </>
  );
}