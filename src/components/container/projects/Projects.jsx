import { Project } from './project/Project'
import styles from './styles.module.scss'
import { Tabs } from './tabs/Tabs'
import { useState, useCallback } from 'react'

const projects = [
  {
    tab: 0,
    title: 'Project 1',
    url: '#',
    imgUrl: 'https://via.placeholder.com/300x200',
    recent: true
  }, {
    tab: 0,
    title: 'Project 2',
    url: '#',
    imgUrl: 'https://via.placeholder.com/300x200',
    recent: false
  }, {
    tab: 0,
    title: 'Project 3',
    url: '#',
    imgUrl: 'https://via.placeholder.com/300x200',
    recent: false
  }, {
    tab: 0,
    title: 'Project 4',
    url: '#',
    imgUrl: 'https://via.placeholder.com/300x200',
    recent: false
  },
  {
    tab: 1,
    title: 'Project 5',
    url: '#',
    imgUrl: 'https://via.placeholder.com/300x200',
    recent: true
  }, {
    tab: 1,
    title: 'Project 6',
    url: '#',
    imgUrl: 'https://via.placeholder.com/300x200',
    recent: false
  }, {
    tab: 1,
    title: 'Project 7',
    url: '#',
    imgUrl: 'https://via.placeholder.com/300x200',
    recent: false
  }, {
    tab: 1,
    title: 'Project 8',
    url: '#',
    imgUrl: 'https://via.placeholder.com/300x200',
    recent: false
  },
  {
    tab: 2,
    title: 'Project 9',
    url: '#',
    imgUrl: 'https://via.placeholder.com/300x200',
    recent: true
  }, {
    tab: 2,
    title: 'Project 10',
    url: '#',
    imgUrl: 'https://via.placeholder.com/300x200',
    recent: false
  }, {
    tab: 2,
    title: 'Project 11',
    url: '#',
    imgUrl: 'https://via.placeholder.com/300x200',
    recent: false
  }, {
    tab: 2,
    title: 'Project 12',
    url: '#',
    imgUrl: 'https://via.placeholder.com/300x200',
    recent: false
  }
]

export const Projects = () => {
  const [activeTab, setActiveTab] = useState(0)

  /* useEffect(() => {
    console.log('useEffect')
  }, [activeTab]) */

  const handleTabClick = useCallback((index, event) => {
    console.log(event)
    event.preventDefault()
    setActiveTab(index)
  }, [])

  return (
    <section id='#projects' className={styles.projects_container}>
      <h2>Projects</h2>
      <Tabs activeTab={activeTab} handleTabClick={handleTabClick} />
      <article className={styles.projects}>
        {
          projects.filter(project => project.tab === activeTab).map((project, index) => {
            return <Project key={index} {...project} />
          })
        }
      </article>
    </section>
  )
}
