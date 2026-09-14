import Link from "next/link"
import styles from "./first-screen.module.css"

const options = [
  { key: "solo", label: "혼자", img: "/assets/first/char-solo.png", href: "/solo" },
  { key: "couple", label: "연인", img: "/assets/first/char-couple.png", href: "/couple" },
  { key: "family", label: "가족", img: "/assets/first/char-family.png", href: "/family" },
  { key: "friends", label: "친구들", img: "/assets/first/char-friends.png", href: "/friends" },
]

export default function Home() {
  return (
    <main className={styles.screen}>
      <Link href="/franchise" className={styles.partnerButton}>
        <span className={styles.partnerButtonEn}>PARTNER</span>
        <span className={styles.partnerButtonDivider} aria-hidden="true" />
        <span className={styles.partnerButtonKo}>파트너 되기</span>
      </Link>

      {/* Ambient background motion only — must never sit above the logo, title, or option cards */}
      <span className={`${styles.bird} ${styles.bird1}`} aria-hidden="true" />
      <span className={`${styles.bird} ${styles.bird2}`} aria-hidden="true" />
      <img className={styles.toad} src="/assets/mascot.png" alt="" aria-hidden="true" />

      <img className={styles.logo} src="/assets/logo-new.png" alt="후루룩찹찹" />

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
            <Link key={option.key} href={option.href} className={styles.option}>
              {content}
            </Link>
          ) : (
            <button key={option.key} type="button" className={styles.option}>
              {content}
            </button>
          )
        })}
      </div>
    </main>
  )
}
