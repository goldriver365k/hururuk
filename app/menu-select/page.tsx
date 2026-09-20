import type { Metadata } from "next"
import Link from "next/link"
import styles from "./first-screen.module.css"

export const metadata: Metadata = {
  title: "메뉴소개 | 후루룩찹찹",
  description: "오늘은 누구와 함께하세요? 혼자, 연인, 가족, 친구들 - 상황별 추천 메뉴를 확인해보세요.",
}

const options = [
  { key: "solo", label: "혼자", img: "/assets/first/char-solo.png", href: "/solo" },
  { key: "couple", label: "연인", img: "/assets/first/char-couple.png", href: "/couple" },
  { key: "family", label: "가족", img: "/assets/first/char-family.png", href: "/family" },
  { key: "friends", label: "친구들", img: "/assets/first/char-friends.png", href: "/friends" },
]

export default function MenuSelectPage() {
  return (
    <main className={styles.screen}>
      <Link href="/franchise" className={styles.partnerButton}>
        <span className={styles.partnerButtonEn}>PARTNER</span>
        <span className={styles.partnerButtonDivider} aria-hidden="true" />
        <span className={styles.partnerButtonKo}>파트너 되기</span>
      </Link>

      <Link href="/" aria-label="후루룩찹찹 홈으로">
        <img className={styles.logo} src="/assets/logo-new.png" alt="후루룩찹찹" />
      </Link>

      <h1 className={styles.title}>오늘은 누구와 함께하세요?</h1>

      <div className={styles.options}>
        {options.map((option) => {
          const content = (
            <>
              <span className={styles.arrow} aria-hidden="true" />
              <span className={styles.card}>
                <img className={styles.char} src={option.img || "/placeholder.svg"} alt={option.label} />
              </span>
              <span className={styles.label}>{option.label}</span>
            </>
          )

          return option.href ? (
            <Link
              key={option.key}
              href={option.href}
              className={`${styles.option} ${option.key === "couple" ? styles.optionCouple : ""}`}
            >
              {content}
            </Link>
          ) : (
            <button
              key={option.key}
              type="button"
              className={`${styles.option} ${option.key === "couple" ? styles.optionCouple : ""}`}
            >
              {content}
            </button>
          )
        })}
      </div>
    </main>
  )
}
