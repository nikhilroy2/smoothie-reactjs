import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss';
import MyRoutes from './routers';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyRoutes></MyRoutes>
    </>
  )
}

export default App
