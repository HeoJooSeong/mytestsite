import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "홍길동 — IT 기업 대표 & 겸임교수", // 여기를 수정하세요 — 브라우저 탭 제목
  description:
    "소프트웨어 개발과 교육의 교차점에서 일하는 IT 기업 대표 겸 대학 겸임교수 홍길동의 프로필 사이트입니다.", // 여기를 수정하세요 — 검색엔진 설명
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
