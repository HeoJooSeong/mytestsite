"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { siteContent } from "@/data/content";

function Placeholder({ label }: { label: string }) {
  return (
    <div
      className="w-full h-full flex items-center justify-center"
      style={{ background: "#E2E8F0" }}
    >
      <span className="text-slate-400 text-sm font-medium">{label}</span>
    </div>
  );
}

export default function Hobbies() {
  const { hobbies } = siteContent;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="hobbies"
      ref={ref}
      className="py-28 px-6"
      style={{ background: "linear-gradient(180deg, #f8fbfd 0%, #f0f9ff 100%)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* 섹션 타이틀 */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="text-3xl font-bold text-slate-900 mb-16 text-center"
        >
          {hobbies.sectionTitle}
          <span className="block w-10 h-1 bg-sky-400 mx-auto mt-3 rounded-full" />
        </motion.h2>

        {/* 카드 그리드 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hobbies.items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, ease: "easeOut", delay: i * 0.1 }}
              whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(56,189,248,0.18)" }}
              className="bg-white rounded-2xl overflow-hidden border border-slate-100 cursor-default"
            >
              {/* 이미지 영역 */}
              <div className="aspect-[4/3] overflow-hidden">
                {item.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Placeholder label={item.imageAlt} />
                )}
              </div>
              {/* 텍스트 */}
              <div className="p-5">
                <h3 className="font-bold text-slate-900 mb-1.5">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
