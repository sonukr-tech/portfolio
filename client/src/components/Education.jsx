import styles from './Education.module.css'

export default function Education() {
  return (
    <section id="education" className={styles.section}>
      <div className={styles.inner}>
        <span className={styles.tag}>// where i studied</span>
        <h2 className={styles.title}>Education</h2>
        <div className={styles.divider} />

        <div className={styles.card}>
          <div className={styles.left}>
            <div className={styles.iconWrap}>🎓</div>
            <div className={styles.line} />
          </div>

          <div className={styles.right}>
            <div className={styles.year}>2023 — 2026</div>
            <h3 className={styles.degree}>Bachelor of Computer Application</h3>
            <p className={styles.college}>St. Xavier's College, Ranchi</p>

            <div className={styles.subjects}>
              {['DSA', 'DBMS', 'Web Development', 'OOP'].map(s => (
                <span key={s} className={styles.chip}>{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}