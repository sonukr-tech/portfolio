import { useScrollReveal } from '../hooks/useScrollReveal'
import styles from './Skills.module.css'

const skillGroups = [
  {
    label: 'Languages',
    items: [
      { icon: '☕', name: 'Java' },
      { icon: '⚡', name: 'C++' },
      { icon: '🌐', name: 'JavaScript' },
      { icon: '🏷️', name: 'HTML5' },
      { icon: '🎨', name: 'CSS3' },
    ]
  },
  {
    label: 'Frontend',
    items: [
      { icon: '⚛️', name: 'React.js' },
      { icon: '🎯', name: 'Tailwind CSS' },
      { icon: '📐', name: 'Responsive Design' },
      { icon: '🔀', name: 'React Router' },
    ]
  },
  {
    label: 'Backend & Database',
    items: [
      { icon: '🟢', name: 'Node.js' },
      { icon: '🚂', name: 'Express.js' },
      { icon: '🍃', name: 'MongoDB' },
      { icon: '🔌', name: 'REST APIs' },
      { icon: '🗄️', name: 'Mongoose' },
    ]
  },
  {
    label: 'Tools & Platforms',
    items: [
      { icon: '🐙', name: 'Git & GitHub' },
      { icon: '💻', name: 'VS Code' },
      { icon: '🚀', name: 'GitHub Pages' },
      { icon: '📦', name: 'npm / Vite' },
      { icon: '🔬', name: 'Postman' },
    ]
  }
]

export default function Skills() {
  const ref = useScrollReveal()

  return (
    <section id="skills" className={styles.section}>
      <div className={`${styles.inner} reveal-block`} ref={ref}>
        <span className={styles.tag}>// what i know</span>
        <h2 className={styles.title}>Skill-Set &amp;<br />Specializations</h2>
        <div className={styles.divider} />
        <p className={styles.sub}>Over time, I have gained hands-on experience with the following technologies:</p>

        {skillGroups.map((group) => (
          <div key={group.label} className={styles.group}>
            <div className={styles.groupLabel}>{group.label}</div>
            <div className={styles.chips}>
              {group.items.map((item) => (
                <div key={item.name} className={styles.chip}>
                  <span className={styles.chipIcon}>{item.icon}</span>
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
