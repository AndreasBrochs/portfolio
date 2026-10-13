import styles from './Section.module.css'

function Section({ id, number, title, children }) {
  const headingId = `${id}-rubrik`

  return (
    <section id={id} className={styles.section} aria-labelledby={headingId}>
      <div className={styles.number} aria-hidden="true">
        {number}
      </div>
      <div className={styles.body}>
        <h2 id={headingId} className={styles.title}>
          {title}
        </h2>
        {children}
      </div>
    </section>
  )
}

export default Section
