import Link from "next/link"
import styles from "./site-nav.module.css"

export function SiteNav() {
  return (
    <nav className={styles.nav} aria-label="페이지 이동">
      <Link href="/" className={styles.button}>
        홈
      </Link>
    </nav>
  )
}
