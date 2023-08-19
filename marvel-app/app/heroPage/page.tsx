import styles from './heroPage.module.css'
import Footer from '../../components/footer'
import HeroContainer from '../../components/heroContainer'

export default function HeroPage() {
  return (
    <main className={styles.main}>
      <HeroContainer></HeroContainer>
      <Footer></Footer>
    </main>
  )
}
