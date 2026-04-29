import { useScrollReveal } from '../hooks/useScrollReveal'
import myPhoto from '../assets/photo.jpeg'
import styles from './About.module.css'

export default function About() {
  const ref = useScrollReveal()

  return (
    <section id="about" className={styles.section}>
      <div className={`${styles.inner} reveal-block`} ref={ref}>
        <div className={styles.header}>
          <span className={styles.tag}>// about me</span>
          <h2 className={styles.title}>Who I Am</h2>
          <div className={styles.divider} />
        </div>

        <div className={styles.grid}>
          <div className={styles.avatarWrap}>
            <div className={styles.avatar}>
  <img src={myPhoto} alt="Sonu Kumar" />
</div>
            <div className={styles.avatarGlow} />
          </div>

          <div className={styles.text}>
            <p>I am <strong>Sonu Kumar</strong>, a passionate Full Stack Web Developer focused on building clean, performant web applications end-to-end.</p>
            <p>With a strong foundation in <strong>HTML, CSS, JavaScript, and React</strong> on the frontend, and <strong>Node.js, Express, and MongoDB</strong> on the backend, I enjoy solving real-world problems with elegant code.</p>
            <p>My programming skills in <strong>Java and C++</strong> give me deep understanding of data structures, algorithms, and OOP principles — which I bring into every project I build.</p>
            <p>I am a proactive learner who loves tackling challenges and contributing to the tech community. Always eager to learn, grow, and collaborate.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
