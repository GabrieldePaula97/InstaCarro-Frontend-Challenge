import React from 'react'
import styles from './heroInfoCard.module.css' 
import Image from 'next/image'
import HeroImage from '../../public/Hero.png'

export default function HeroInfoCard({name, description, thumb}) {
  return (
    <div className={styles.heroInfoCard}>
      <div className={styles.grid}>
        <div className={styles.heroImageContainer}>
        {/* <Image src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt={''}  width={200} height={212} className={styles.heroImage}></Image> */}
        <Image src={thumb} alt={''}  width={200} height={212} className={styles.heroImage}></Image>
        </div>
        <div className={styles.heroInfoContainer}>
          <div className={styles.heroName}>{name}</div>
          <div className={styles.heroDescription}>{description}</div>
        </div>
      </div>
    </div>
  )
}
