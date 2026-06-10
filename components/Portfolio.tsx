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

export default function Portfolio() {
  const { portfolio } = siteContent;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="portfolio"
      ref={ref}
      className="py-28 px-6 max-w-6xl mx-auto"
    >
      {/* 섹션 타이틀 */}
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="text-3xl font-bold text-slate-900 mb-16 text-center"
      >
        {portfolio.sectionTitle}
        <span className="block w-10 h-1 bg-sky-400 mx-auto mt-3 rounded-full" />
      </motion.h2>

      {/* 카드 그리드 */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {portfolio.items.map((item, i) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: "easeOut", delay: i * 0.1 }}
            className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-sky-200 hover:shadow-lg transition-shadow duration-300 cursor-default"
          >
            {/* 썸네일 */}
            <div className="aspect-video overflow-hidden">
              {item.thumbnail ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={item.thumbnail}
                  alt={item.thumbnailAlt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full transition-transform duration-500 group-hover:scale-105">
                  <Placeholder label={item.thumbnailAlt} />
                </div>
              )}
            </div>
            {/* 내용 */}
            <div className="p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">{item.desc}</p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-medium rounded-md bg-sky-50 text-sky-600 border border-sky-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
