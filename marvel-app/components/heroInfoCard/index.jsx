import React from 'react'
import styles from './heroInfoCard.module.css' 
import Image from 'next/image'
import HeroImage from '../../public/Hero.png'

export default function HeroInfoCard({hero}) {
  return (
    <div className={styles.heroInfoCard}>
      <div className={styles.grid}>
        <div className={styles.heroImageContainer}>
        {/* <Image src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt={''}  width={200} height={212} className={styles.heroImage}></Image> */}
        <Image src={HeroImage} alt={''}  width={200} height={212} className={styles.heroImage}></Image>
        </div>
        <div className={styles.heroInfoContainer}>
          <div className={styles.heroName}>{'Spider-Man'}</div>
          <div className={styles.heroDescription}>{'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eleifend metus in tincidunt blandit. Donec sollicitudin maximus accumsan. Sed condimentum ipsum eu lacus suscipit luctus. Nam eleifend orci at diam pharetra tincidunt. Praesent eu metus viverra.'}</div>
        </div>
      </div>
    </div>
  )
}
