import styles from './styles.module.scss'
import { Tab } from './tab/Tab'

export const Tabs = ({ activeTab, handleTabClick }) => {
  return (
    <div className={styles.tabs}>
      <Tab title='Real Projects' activeTab={activeTab} index={0} handleTabClick={handleTabClick} />
      <Tab title='Minecraft Plugins' activeTab={activeTab} index={1} handleTabClick={handleTabClick} />
      <Tab title='Personal Challenges' activeTab={activeTab} index={2} handleTabClick={handleTabClick} />
    </div>
  )
}
