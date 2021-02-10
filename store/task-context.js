import { createContext, useReducer } from 'react'

const initialState = {
  tasks: [],
  loading: false
}

export const taskAction = {
  add: 'add',
  setStatus: 'setStatus',
  load: 'load',
  loaded: 'loaded'
}

const reducer = (state, { type, payload }) => {
  switch (type) {
    case taskAction.add:
      return { tasks: [...state.tasks, payload] }
    case taskAction.setStatus: {
      const updatingTask = state.tasks.find(task => task.id === payload.id)

      updatingTask.status = payload.status

      return { tasks: [...state.tasks] }
    }
    case taskAction.load:
      return { loading: true }
    case taskAction.loaded:
      return { tasks: payload, loading: false }
    default:
      return state
  }
}

export const TaskContext = createContext()

export const TaskContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <TaskContext.Provider value={[state, dispatch]}>
      {children}
    </TaskContext.Provider>
  )
}
