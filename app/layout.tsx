import type { Metadata, Viewport } from "next"
import type { ReactNode } from "react"
import "../styles.css"

export const metadata: Metadata = {
  title: "후루룩찹찹 | 한 그릇의 새로운 기준",
  description:
    "한 그릇 전문점(덮밥·쌀국수·파스타·마라탕) 프랜차이즈 후루룩찹찹. 2026 외식 소비 핵심 트렌드 '한그릇 오리지널리티' 브랜드.",
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
