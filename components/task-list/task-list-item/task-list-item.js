import { useContext } from 'react'
import Icon from '@material-ui/core/Icon'
import Button from '@material-ui/core/Button'

import { taskAction, TaskContext } from '../../../store/task-context'
import { Firestore } from '../../../common/utils'

import { TASK_LIST_ITEM_STYLES, TASK_DOABLE_ACTION } from '../../../common/constants'

import styles from './task-list-item.module.css'

const TaskListItem = ({ children, id, status }) => {
  const [state, dispatch] = useContext(TaskContext)

  const handleClick = async (e) => {
    const id = e.currentTarget.dataset.id
    const status = parseInt(e.currentTarget.dataset.status, 10)

    try {
      await Firestore.updateData({ id, status }, 'tasks')
      dispatch({
        type: taskAction.setStatus,
        payload: { id, status }
      })
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <li className={styles.taskListItem}>
      <Icon style={{ color: TASK_LIST_ITEM_STYLES[status].COLOR, margin: 'auto 4px auto 0px' }}>
        {TASK_LIST_ITEM_STYLES[status].ICON}
      </Icon>
      <p className={styles.title}>{children}</p>
      <div className={styles.btnGroup}>
        {TASK_DOABLE_ACTION[status].map((action) => (
          <Button
            key={`task_${id}_action_${action.name}`}
            type='button'
            color={action.color}
            data-id={id}
            data-status={action.value}
            onClick={handleClick}
          >
            {action.name}
          </Button>
        ))}
      </div>
    </li>
  )
}

export default TaskListItem
