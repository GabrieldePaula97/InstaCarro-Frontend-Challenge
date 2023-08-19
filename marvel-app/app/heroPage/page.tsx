'use client'

import { useSearchParams } from 'next/navigation';
import styles from './heroPage.module.css'
import Footer from '../../components/footer'
import HeroContainer from '../../components/heroContainer'

export default function HeroPage() {
  const urlParams = useSearchParams()

  const name = urlParams.get('name')
  const description = urlParams.get('description')
  const thumb = urlParams.get('thumb')
  const id = urlParams.get('id')
  
  return (
    <main className={styles.main}>
      <HeroContainer
        name={name}
        description={description}
        thumb={thumb}
        id={id}
      />
      <Footer></Footer>
    </main>
  )
}
