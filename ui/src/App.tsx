import { useState } from 'react'
import './App.css'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Button>Hello Turborepo</Button>
    </div>
  )
}

export default App
