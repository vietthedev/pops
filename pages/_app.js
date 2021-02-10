import { TaskContextProvider } from '../store/task-context'

const App = ({ Component, pageProps }) => (
  <TaskContextProvider>
    <Component {...pageProps} />
  </TaskContextProvider>
)

export default App
