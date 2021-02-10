import styles from './task-list.module.css'

const TaskList = ({ children }) => (
  <ul className={styles.taskList}>
    {children}
  </ul>
)

export default TaskList
