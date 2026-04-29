import styles from './Hero.module.css'

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.glow1} />
      <div className={styles.glow2} />

      <div className={styles.content}>
        <span className={styles.badge}>Available for opportunities</span>

        <p className={styles.hello}>Hello, 👋</p>

        <h1 className={styles.name}>
          I am <span className={styles.gradient}>Sonu Kumar</span>
        </h1>

        <p className={styles.role}>
          Full Stack Web Developer — React · Node.js · MongoDB
        </p>

        <p className={styles.desc}>
          I build responsive, scalable web applications from front to back.
          Experienced in Java, C++, and JavaScript — always learning, always shipping.
        </p>

        <div className={styles.cta}>
          <button className={styles.btnPrimary} onClick={() => scrollTo('projects')}>
            View My Work →
          </button>
          <button className={styles.btnOutline} onClick={() => scrollTo('contact')}>
            Get In Touch
          </button>
        </div>

        <div className={styles.scrollHint}>
          <div className={styles.scrollLine} />
          <span>SCROLL DOWN</span>
        </div>
      </div>
    </section>
  )
}
