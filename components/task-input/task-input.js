import { useState } from 'react'

import { Firestore } from '../../common/utils'

import { TASK_STATUS } from '../../common/constants'

import styles from './task-input.module.css'

const TaskInput = ({ onSubmit }) => {
  const [taskTitle, updateTaskTitle] = useState('')

  const handleChange = (e) => updateTaskTitle(e.currentTarget.value)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (onSubmit && taskTitle) {
      try {
        const task = {
          id: Date.now().toString(),
          title: taskTitle,
          status: TASK_STATUS.TODO
        }

        await Firestore.addData(task, 'tasks')
        onSubmit(task)
      } catch (err) {
        console.error(err)
      }
    }

    updateTaskTitle('')
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <input
        className={styles.taskInput}
        type='text'
        value={taskTitle}
        onChange={handleChange}
      />
    </form>
  )
}

export default TaskInput
