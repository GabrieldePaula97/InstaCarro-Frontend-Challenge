'use client'

import React, {useState, useEffect} from 'react'
import styles from './heroContainer.module.css' 
import HeroInfoCard from '../heroInfoCard'
import ComicInfoCard from '../comicInfoCard'

export default function HeroContainer({name, description, thumb, id}) {
  return (
    <div className={styles.flexContainer}>
        <div className={styles.header}>
          <div className={styles.flexContainer}>
            <div className={styles.row}>
              <p className={styles.title}>DESCUBRA TODOS OS QUADRINHOS DESTE PERSONAGEM</p>
            </div>
            <div className={styles.row}>
              <HeroInfoCard 
              name={name}
              description={description}
              thumb={thumb}
              />
            </div>
            <div className={styles.rowComic}>
              <ComicInfoCard></ComicInfoCard>
            </div>
          </div>
        </div>
    </div>
  )
}


