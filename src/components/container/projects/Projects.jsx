import { Project } from './project/Project'
import styles from './styles.module.scss'
import { Tabs } from './tabs/Tabs'
import { useState, useCallback, useEffect } from 'react'
import { getAllProjects } from '../../../services/getAllProjects'

export const Projects = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [projects, setProjects] = useState([])

  useEffect(() => {
    getAllProjects(activeTab).then(projects => setProjects(projects))
  }, [activeTab])

  const handleTabClick = useCallback((index, event) => {
    event.preventDefault()
    setActiveTab(index)
  }, [])

  return (
    <section className={styles.projects_container}>
      <h2>Projects</h2>
      <Tabs activeTab={activeTab} handleTabClick={handleTabClick} />
      <article id='projects' className={styles.projects}>
        {
          projects.map((project, index) => {
            return <Project key={index} {...project} />
          })
        }
      </article>
    </section>
  )
}
