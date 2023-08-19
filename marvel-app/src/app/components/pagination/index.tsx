import React from 'react';
import styles from './pagination.module.css'
import iconPrev from '../../../../public/icon_chevron-left.png'
import iconNext from '../../../../public/icon_chevron-right.png'
import Image from 'next/image';

const Pagination = (props: {heroLimit: number, total: number, setCurrentPage: any, currentPage: number}) => {
  const pageNumbers = []
  for(let i = 1, j = 1; i <= Math.ceil(props.total/props.heroLimit); i++) {
    if(i >= props.currentPage && j < 5 || i === Math.ceil(props.total/props.heroLimit) || Math.abs(props.currentPage - i) <= 1){
      pageNumbers.push(i)
      j++;
    }
  }
  return(
    <nav>
      <ul className={styles.pagination}>
         <li key={'prev'} className={props.currentPage-1 < 1 ? styles.disabledNextPrevButton : styles.nextPrevButton} onClick={() => props.setCurrentPage(props.currentPage-1)}>
         <Image src={iconPrev} alt={''} />
          </li>
        {pageNumbers.map((number) => {
          return (
            <li key={number} className={props.currentPage === number ? styles.pageButtonCurrentPage : styles.pageButton} onClick={() => props.setCurrentPage(number)}>
              {number}
            </li>
        )})}
        <li key={'next'} className={props.currentPage+1 > Math.ceil(props.total/props.heroLimit) ? styles.disabledNextPrevButton : styles.nextPrevButton} onClick={() => props.setCurrentPage(props.currentPage+1)}>
          <Image src={iconNext} alt={''} />
        </li>
      </ul>
    </nav>
  )
}
export default Pagination;