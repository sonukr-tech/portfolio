import { useState, useEffect } from 'react'
import api from '../api'
import { useScrollReveal } from '../hooks/useScrollReveal'
import styles from './Projects.module.css'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'

const images = [project1, project2, project3]

function PreviewArt({ index }) {
  return (
    <div className={styles.previewSvg}>
      <img
        src={images[index % images.length]}
        alt="project preview"
        style={{
          width: '100%',
          height: '220px',
          objectFit: 'cover',
          display: 'block'
        }}
      />
    </div>
  )
}

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [current, setCurrent] = useState(0)
  const ref = useScrollReveal()

  useEffect(() => {
    api.get('/projects')
      .then(res => setProjects(res.data.data || []))
      .catch(() => setProjects([
        { _id:'1', title:'E-Learning Platform with AI Tutor', description:'A scalable, cloud-native e-learning platform leveraging AWS services to deliver personalized education through an integrated AI tutor.', tags:['react','nodejs','mongodb','aws','ai'], githubUrl:'https://github.com/sonukr-tech/Learning-Hub', liveUrl:'' },
        { _id:'2', title:'Grocery Management System', description:'A software solution designed to automate and streamline inventory, sales, customer orders, and staff management for retail grocery stores.', tags:['react','nodejs','mongodb'], githubUrl:'https://github.com/sonukr-tech/Online-Grocery-Shop', liveUrl:'' },
        { _id:'3', title:'Bike and Car Rental System', description:'A web-based platform that streamlines vehicle booking with real-time availability, secure reservations, and payments.', tags:['react','nodejs','mongodb'], githubUrl:'https://github.com/sonukr-tech/Bike-and-Car-Rental-System', liveUrl:'' }
      ]))
      .finally(() => setLoading(false))
  }, [])

  const prev = () => setCurrent(c => (c - 1 + projects.length) % projects.length)
  const next = () => setCurrent(c => (c + 1) % projects.length)

  const p = projects[current]

  return (
    <section id="projects" className={styles.section}>
      <div className={`${styles.inner} reveal-block`} ref={ref}>
        <span className={styles.tag}>// my work</span>
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.divider} />
        <p className={styles.sub}>Throughout my journey, I have worked on various projects that showcase my skills and creativity:</p>

        {loading ? (
          <div className={styles.loading}>
            <div className={styles.spinner} />
            <span>Loading projects...</span>
          </div>
        ) : p ? (
          <div className={styles.carousel}>
            <div className={styles.card}>
              <PreviewArt index={current} />

              <div className={styles.body}>
                <div className={styles.tags}>
                  {p.tags?.map(t => (
                    <span key={t} className={styles.pill}>#{t}</span>
                  ))}
                </div>
                <h3 className={styles.cardTitle}>{p.title}</h3>
                <p className={styles.cardDesc}>{p.description}</p>
                <div className={styles.cardLinks}>
                  {p.githubUrl && (
                    <a href={p.githubUrl} target="_blank" rel="noreferrer" className={styles.btnOutline}>
                      🐙 GitHub
                    </a>
                  )}
                  {p.liveUrl && (
                    <a href={p.liveUrl} target="_blank" rel="noreferrer" className={styles.btnPrimary}>
                      🚀 Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className={styles.nav}>
              <button className={styles.navBtn} onClick={prev}>← Prev</button>
              <div className={styles.dots}>
                {projects.map((_, i) => (
                  <button
                    key={i}
                    className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
                    onClick={() => setCurrent(i)}
                    aria-label={`Go to project ${i + 1}`}
                  />
                ))}
              </div>
              <button className={styles.navBtn} onClick={next}>Next →</button>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}