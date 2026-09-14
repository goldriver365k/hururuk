import type { Metadata, Viewport } from "next"
import type { ReactNode } from "react"
import "../styles.css"

export const metadata: Metadata = {
  title: "후루룩찹찹 | 신개념 분식 · 외식업 창업 파트너",
  description:
    "덮밥, 쌀국수, 마라탕, 스파게티, 라멘, 돈까스를 한곳에서 즐기는 신개념 분식 브랜드 후루룩찹찹. 상권에 맞춰 메뉴를 구성하는 외식업·음식점 창업 파트너를 안내합니다.",
  keywords: [
    "신개념 분식",
    "분식 창업",
    "분식집 창업",
    "외식업 창업",
    "음식점 창업",
    "프랜차이즈 창업",
    "대학가 창업",
    "상권 맞춤 창업",
    "덮밥 창업",
    "쌀국수 창업",
    "마라탕 창업",
    "라멘 창업",
    "돈까스 창업",
    "파스타 창업",
  ],
  openGraph: {
    title: "후루룩찹찹 | 신개념 분식 · 외식업 창업 파트너",
    description:
      "여러 전문메뉴를 한곳에서 즐기는 신개념 분식 브랜드 후루룩찹찹. 상권에 맞춘 외식업 창업 파트너를 안내합니다.",
  },
}

export const viewport: Viewport = {
  themeColor: "#A63A2C",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@500;600;700;900&family=Pretendard:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
