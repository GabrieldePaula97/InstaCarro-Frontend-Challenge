'use client'

import React, {useState, useEffect} from 'react'
import styles from './heroContainer.module.css' 
import HeroInfoCard from '../heroInfoCard'
import ComicInfoCard from '../comicInfoCard'
import { searchComics } from '../../app/api'
import LoadingSpinner from '../loading-spinner/loading-spinner'

export default function HeroContainer({name, description, thumb, id}) {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState([])

  const searchCharacterComics = async (id) => {
    try {
        setLoading(true)
        const res = await fetch(
          searchComics(id),
            {
                method: 'GET',
            }
        );
        const response = await res.json();
        // console.log(response.data);
        setResult(response.data.results)
        setLoading(false)
    } catch (err) {
        console.log(err);
        setLoading(false)
    }
  };

  useEffect(() => {
    searchCharacterComics(id)
  }, [])

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
            {loading ? <LoadingSpinner/> : 
            (result.map((comic) => {
              return (
              <div className={styles.rowComic} key={comic.id}>
                <ComicInfoCard comic={comic}/>
              </div>)
            }))
            }
          </div>
        </div>
    </div>
  )
}


