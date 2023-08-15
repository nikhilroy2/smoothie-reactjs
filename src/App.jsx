import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Base from './layout/Base';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Base>
      Lorem, ipsum dolor.
      </Base>
    </>
  )
}

export default App
