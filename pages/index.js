import Head from 'next/head'
import { useContext, useEffect } from 'react'
import TaskList from '../components/task-list'
import TaskListItem from '../components/task-list/task-list-item'
import TaskInput from '../components/task-input'
import Spinner from '../components/spinner'

import { taskAction, TaskContext } from '../store/task-context'

import { LocalStorage, Firestore } from '../common/utils'

const Home = () => {
  const [state, dispatch] = useContext(TaskContext)
  const { tasks, loading } = state

  const addTask = (task) => dispatch({ type: taskAction.add, payload: task })

  useEffect(() => {
    dispatch({ type: taskAction.load })

    const offlineTasks = JSON.parse(LocalStorage.get('tasks'))

    Firestore.fetchData('tasks')
      .then(onlineTasks => {
        dispatch({ type: taskAction.loaded, payload: onlineTasks })
      })
      .catch(() => {
        if (offlineTasks) {
          return dispatch({ type: taskAction.loaded, payload: offlineTasks })
        }

        dispatch()
      })
  }, [])

  useEffect(() => {
    LocalStorage.set('tasks', JSON.stringify(state.tasks))
  }, [state.tasks])

  return (
    <div className="container">
      <Head>
        <title>Todo Task Web App</title>
        <link
          href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic|Roboto+Mono:400,500|Material+Icons'
          rel='stylesheet'
        />
      </Head>
      <main style={{ maxWidth: "966px", margin: "auto" }}>
        <TaskInput onSubmit={addTask} />
        {loading
          ? <Spinner />
          : (
            <TaskList>
              {tasks.map((task) => (
                <TaskListItem key={`task_${task.id}`} {...task}>
                  {task.title}
                </TaskListItem>
              ))}
            </TaskList>
          )}
      </main>
    </div>
  )
}

export default Home
