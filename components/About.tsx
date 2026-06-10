"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { siteContent } from "@/data/content";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" as const, delay: i * 0.1 },
  }),
};

function Placeholder({ label }: { label: string }) {
  return (
    <div
      className="w-full h-full flex items-center justify-center rounded-2xl"
      style={{ background: "#E2E8F0" }}
    >
      <span className="text-slate-400 text-sm font-medium">{label}</span>
    </div>
  );
}

export default function About() {
  const { about } = siteContent;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      ref={ref}
      className="py-28 px-6 max-w-6xl mx-auto"
    >
      {/* 섹션 타이틀 */}
      <motion.h2
        custom={0}
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="text-3xl font-bold text-slate-900 mb-16 text-center"
      >
        {about.sectionTitle}
        <span className="block w-10 h-1 bg-sky-400 mx-auto mt-3 rounded-full" />
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-14 items-start">
        {/* 좌: 프로필 이미지 */}
        <motion.div
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="aspect-[4/5] rounded-2xl overflow-hidden"
        >
          {about.profileImage ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={about.profileImage}
              alt={about.profileImageAlt}
              className="w-full h-full object-cover"
            />
          ) : (
            <Placeholder label={about.profileImageAlt} />
          )}
        </motion.div>

        {/* 우: 텍스트 */}
        <div className="flex flex-col gap-6">
          {/* 직함 */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex flex-wrap gap-3"
          >
            {about.roles.map((role) => (
              <span
                key={role}
                className="px-4 py-1.5 rounded-full text-sm font-semibold bg-sky-50 text-sky-700 border border-sky-200"
              >
                {role}
              </span>
            ))}
          </motion.div>

          {/* 소개 문단 */}
          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-slate-600 leading-relaxed text-base"
          >
            {about.bio}
          </motion.p>

          {/* 키워드 */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex flex-wrap gap-2"
          >
            {about.keywords.map((kw) => (
              <span
                key={kw}
                className="px-3 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-600"
              >
                #{kw}
              </span>
            ))}
          </motion.div>

          {/* 타임라인 */}
          <motion.div
            custom={5}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="mt-2"
          >
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-4">
              경력
            </h3>
            <ol className="relative border-l border-slate-200 pl-6 flex flex-col gap-5">
              {about.timeline.map((item, i) => (
                <li key={i} className="relative">
                  <span className="absolute -left-[25px] top-1.5 w-3 h-3 rounded-full border-2 border-sky-400 bg-white" />
                  <span className="text-xs font-bold text-sky-500 block mb-0.5">
                    {item.year}
                  </span>
                  <span className="text-sm text-slate-700">{item.desc}</span>
                </li>
              ))}
            </ol>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
