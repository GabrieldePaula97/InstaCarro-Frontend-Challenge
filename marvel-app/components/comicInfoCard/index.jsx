import React from 'react'
import styles from './comicInfoCard.module.css' 

export default function ComicInfoCard({comic}) {
  return (
    <div className={styles.comicInfoCard}>
      <div className={styles.grid}>
        <div className={styles.comicImageContainer}>
        </div>
        <div className={styles.comicInfoContainer}>
          <div className={styles.comicName}>{'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pretium metus interdum dolor.'}</div>
          <div className={styles.comicData}>{`01/01/1990`} 0 {`47 pages`}</div>
          <div className={styles.comicDescription}>{'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium...'}</div>
        </div>
      </div>
    </div>
  )
}
