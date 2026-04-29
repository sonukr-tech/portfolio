import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.line} />
      <p>
        Designed &amp; Developed by <span className={styles.accent}>Sonu Kumar</span>
      </p>
      <p className={styles.stack}>Built with React · Node.js · Express · MongoDB</p>
    </footer>
  )
}
