import styles from './page.module.css'
import "../styles/font.module.css"
import Link from 'next/link'
import star01 from "../assets/star01.png"
import Image from "next/image"

export default function Home() {
  return (
    <div style={{ textAlign: "center" }}>
      <main className={styles.main}>
      </main>
      <h1 className={styles.title}> STAR WARS
      </h1>
      <h2 className={styles.subTitle}>CHALLENGE</h2>
      <Link href="home">
        <button className={styles.button}>HOME</button>
      </Link>
      <Image className={styles.image01} src={star01} alt="" />

    </div>
  )
}
