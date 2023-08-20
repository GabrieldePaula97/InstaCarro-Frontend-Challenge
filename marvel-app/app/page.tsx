'use client'

import Main from '../components/main'
import styles from './page.module.css'
import Footer from '../components/footer'
import { store } from '../redux/store'
import { Provider } from 'react-redux'

export default function Home() {
  return (
    <Provider store={store}>
      <main className={styles.main}>
        <Main></Main>
        <Footer></Footer>
      </main>
    </Provider>
  )
}
