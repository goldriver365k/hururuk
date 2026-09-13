import styles from "./first-screen.module.css"

const options = [
  { key: "solo", label: "혼자", img: "/assets/first/char-solo.png" },
  { key: "couple", label: "연인", img: "/assets/first/char-couple.png" },
  { key: "family", label: "가족", img: "/assets/first/char-family.png" },
  { key: "friends", label: "친구들", img: "/assets/first/char-friends.png" },
]

export default function Home() {
  return (
    <main className={styles.screen}>
      <img className={styles.logo} src="/assets/logo-neon.png" alt="후루룩찹찹" />

      <h1 className={styles.title}>오늘은 누구와 함께하세요?</h1>

      <div className={styles.options}>
        {options.map((option) => (
          <button key={option.key} type="button" className={styles.option}>
            <span className={styles.arrow} aria-hidden="true" />
            <span className={styles.card}>
              <img className={styles.char} src={option.img || "/placeholder.svg"} alt={option.label} />
            </span>
            <span className={styles.label}>{option.label}</span>
          </button>
        ))}
      </div>
    </main>
  )
}
