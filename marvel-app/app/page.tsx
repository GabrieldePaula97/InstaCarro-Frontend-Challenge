import Main from '../components/main'
import styles from './page.module.css'
import Footer from '../components/footer'

export default function Home() {
  return (
    <main className={styles.main}>
      <Main></Main>
      <Footer></Footer>
    </main>
  )
}
