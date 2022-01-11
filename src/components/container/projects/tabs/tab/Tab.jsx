import styles from './styles.module.scss'

export const Tab = ({ title, activeTab, handleTabClick, index }) => {
  return (
    <a id='#tab' className={`${styles.tab} ${activeTab === index ? `${styles.active}` : ''}`} onClick={(event) => handleTabClick(index, event)}> {title}</a>
  )
}
