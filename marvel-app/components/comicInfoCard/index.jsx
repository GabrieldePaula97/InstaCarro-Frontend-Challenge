import React from 'react'
import styles from './comicInfoCard.module.css' 

export default function ComicInfoCard({comic}) {
  return (
    <div className={styles.comicInfoCard}>
      <div className={styles.grid}>
          <div className={styles.comicImageContainer} />
          <div className={styles.comicInfoContainer}>
            <div className={styles.comicName}>{comic.title}</div>
            <div className={styles.comicData}>{`01/01/1990`} 0 {`${comic.pageCount} pages`}</div>
            <div className={styles.comicDescription}>{comic?.description ? comic?.description?.slice(0, 200) + '...' : 'No description found' }</div>
          </div>
      </div>
    </div>
  )
}
