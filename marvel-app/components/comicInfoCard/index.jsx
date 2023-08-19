import React from 'react'
import styles from './comicInfoCard.module.css' 
import Image from 'next/image'
import Pages from '../../public/icon_pages.png'

export default function ComicInfoCard({comic}) {
  const getComicDate = () => {
    const comicDate = comic.dates.filter(date => date.type === 'onsaleDate')
    const dateToFormat = new Date (Date.parse(comicDate[0].date))
    return `${dateToFormat.getDate()}/${dateToFormat.getMonth()+1}/${dateToFormat.getFullYear()}`
  }

  return (
    <div className={styles.comicInfoCard}>
      <div className={styles.grid}>
          <div className={styles.comicImageContainer} style={{background: `url(${`${comic.thumbnail.path}.${comic.thumbnail.extension}`}) center center / cover no-repeat`}}/>
          <div className={styles.comicInfoContainer}>
            <div className={styles.comicName}>{comic.title}</div>
            <div className={styles.comicData}>{getComicDate()} <Image src={Pages} alt={''} className={styles.pagesIcon} /> {`${comic.pageCount} pages`}</div>
            <div className={styles.comicDescription}>{comic?.description ? comic?.description?.slice(0, 200) + '...' : 'No description found' }</div>
          </div>
      </div>
    </div>
  )
}
