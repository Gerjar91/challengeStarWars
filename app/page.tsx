import styles from './page.module.css'
import "../styles/font.module.css"
import Link from 'next/link'

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
      <img className={styles.image01} src='https://freepngimg.com/save/16912-star-wars-jedi-png/1023x877'></img>
      {/* <div className={styles.footer}></div> */}
    </div>
  )
}
