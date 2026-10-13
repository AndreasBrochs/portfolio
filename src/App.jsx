import Section from './components/Section.jsx'
import { sections } from './data/sections.js'
import styles from './App.module.css'

function App() {
  return (
    <main className={styles.page}>
      {sections.map((section, index) => (
        <Section
          key={section.id}
          id={section.id}
          number={String(index + 1).padStart(2, '0')}
          title={section.label}
        />
      ))}
    </main>
  )
}

export default App
