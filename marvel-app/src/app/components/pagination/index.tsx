import React from 'react';
import styles from './pagination.module.css'

const Pagination = (props: {heroLimit: number, total: number, setCurrentPage: any, currentPage: number}) => {

  const pageNumbers = []
  for(let i = 1, j = 1; i <= Math.ceil(props.total/props.heroLimit); i++) {
    if(i >= props.currentPage - 1 && j < 5 || i === Math.ceil(props.total/props.heroLimit) || Math.abs(props.currentPage - i) <= 1){
      pageNumbers.push(i)
      j++;
    }
  }
  return(
    <nav>
      <ul className={styles.pagination}>
        {pageNumbers.map((number) => {
          return (
            <li key={number} className={styles.pageButton} onClick={() => props.setCurrentPage(number)}>
              {number}
            </li>
        )})}
      </ul>
    </nav>
  )
}
export default Pagination;