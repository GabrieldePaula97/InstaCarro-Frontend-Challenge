'use client'

import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setFavorites, setInitialState } from '../../redux/favoriteSlice'
import styles from './main.module.css'
import Image from 'next/image';
import iconHeart from '../../public/icon_Heart.png'
import Pagination from '../pagination';
import {searchCharacterByNameUrl, searchCharactersUrl} from '../../app/api'
import LoadingSpinner from '../loading-spinner/loading-spinner';
import Link from 'next/link';


export default function Main() {
  const [searchInput, setSearchInput] = useState("");
  const [result, setResult] = useState<any[]>([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const heroLimit = 20

  const favorites = useSelector((state: any) => state.favorites.favorites)
  const dispatch = useDispatch()

  const handleAddToFavorite = (hero: any) => {
    const favoritesUpdated = [...favorites]
    // if(favoritesUpdated)
    favoritesUpdated.push(hero)
    console.log({favorites, hero, favoritesUpdated})
    dispatch(setFavorites({payload: {favoritesUpdated}}))
  }

  const handleKeyDown = (event: { key: string; }) => {
    if(event.key === 'Enter') {
      setCurrentPage(1)
      if(searchInput !== '') {
        searchCharacterByName()
        return
      }
      searchCharacters()
    }
  }

  const searchCharacters = async (currentPageNumber = 1) => {
    try {
        setLoading(true)
        const res = await fetch(
          searchCharactersUrl(Math.ceil(heroLimit*(currentPageNumber-1))),
            {
                method: 'GET',
            }
        );
        const response = await res.json();
        // console.log(response.data);
        setResult(response.data.results)
        setTotal(response.data.total)
        setLoading(false)
    } catch (err) {
        console.log(err);
        setLoading(false)
    }
  };

  const searchCharacterByName = async (currentPageNumber = 1) => {
    try {
        setLoading(true)
        const res = await fetch(
          searchCharacterByNameUrl(searchInput, Math.ceil(heroLimit*(currentPageNumber-1))),
            {
                method: 'GET',
            }
        );
        const response = await res.json();
        // console.log(response.data);
        setResult(response.data.results)
        setTotal(response.data.total)
        setLoading(false)
    } catch (err) {
        console.log(err);
        setLoading(false)
    }
  };

  useEffect(() => {
    searchCharacters()
  }, []);

  useEffect(() => {
    if(searchInput !== '') {
      searchCharacterByName(currentPage)
      return
    }
    searchCharacters(currentPage)
  }, [currentPage])

  useEffect(() => {
    console.log('MUDOU', {favorites})
  }, [favorites])

  return (
    <div className={styles.flexContainer}>
      <div className={styles.row}>
        <p className={styles.title}>EXPLORE O UNIVERSO E CRIE SUA EQUIPE</p>
        <p className={styles.subtitle}>Os melhores personagens já feitos em quadrinhos. Fique viciado em uma generosa porção de heróis e vilões!</p>
      </div>
      <div className={styles.row}>
        <div className={styles.searchBarContainer}>
          <input className={styles.searchBar} type="text" name="hero" id="hero" placeholder='Procure por heróis' onChange={event => setSearchInput(event.target.value)} value={searchInput} onKeyDown={handleKeyDown}/>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.headerResult}>
          <p className={styles.resultTotal}>Encontrados {total} heróis</p>
          <button className={styles.favoritesButton}>
            Somente favoritos {favorites?.length}
          </button>
        </div>
      </div>
      <div className={styles.row}>
        {loading && result.length ? <LoadingSpinner/> : 
        (<div className={styles.grid}>
          {result.map((hero: any) => {
            return (
              <div className={styles.heroCard} key={hero.id}>
                <div className={styles.heroContainer}>
                  <Image src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt={''} layout="fill" className={styles.heroImage}></Image>
                  <Link className={styles.heroName} href={{
                    pathname: '/heroPage',
                    query: {
                      id: hero.id,
                      name: hero.name,
                      description: hero.description,
                      thumb: `${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                    }}>
                      {hero.name}
                    </Link>
                    <Image src={iconHeart} alt={''} className={styles.addToFavorite} onClick={() => handleAddToFavorite(hero)}/>

                  <p className={styles.heroDescription}>{hero?.description || 'No description found'}</p>
                </div>
              </div>
            )})}
        </div>)}
      </div>
      <div className={styles.row}>
      <Pagination
        heroLimit={heroLimit}
        total={total}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      </div>
    </div>
  )
}

