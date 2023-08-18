import styles from './footer.module.css'

export default function Footer() {
  return (
   <div className={styles.footer}>
    <p className={styles.footerText}>Data provided by Marvel. © 2023 MARVEL</p>
    <p className={styles.footerText}>Desenvolvido por Gabriel de Paula</p>
   </div>
  )
}
