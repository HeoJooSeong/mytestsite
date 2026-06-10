"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/content";

export default function Hero() {
  const { hero } = siteContent;

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #e0f2fe 0%, #f0f9ff 40%, #f8fbfd 100%)",
      }}
    >
      {/* 배경 블러 원 (ambient blobs) */}
      <div
        aria-hidden
        className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full blur-3xl opacity-40 animate-[blob_8s_ease-in-out_infinite]"
        style={{ background: "#bae6fd" }}
      />
      <div
        aria-hidden
        className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-30 animate-[blob_10s_ease-in-out_2s_infinite]"
        style={{ background: "#7dd3fc" }}
      />

      {/* 메인 텍스트 */}
      <div className="relative z-10 text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="text-sky-500 font-semibold tracking-widest text-sm mb-4 uppercase"
        >
          Welcome
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
          className="text-6xl sm:text-7xl md:text-8xl font-bold text-slate-900 leading-tight mb-4"
        >
          {hero.name}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
          className="w-16 h-1 bg-sky-400 mx-auto mb-6 rounded-full"
        />

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
          className="text-xl sm:text-2xl text-slate-600 font-medium"
        >
          {hero.tagline}
        </motion.p>
      </div>

      {/* 스크롤 유도 화살표 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-10 flex flex-col items-center gap-2 text-slate-400"
      >
        <span className="text-xs tracking-widest uppercase">{hero.scrollHint}</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </motion.div>
      </motion.div>

      <style jsx global>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(20px, -20px) scale(1.05); }
          66% { transform: translate(-15px, 15px) scale(0.97); }
        }
      `}</style>
    </section>
  );
}
