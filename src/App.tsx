import { useState } from 'react'
import './App.css'

function App() {
  const [szamlalo, setSzamlalo] = useState(0)

  return (
    <>
      <h1>React hookok: Use effect</h1>
      <p>Érték: {szamlalo}</p>
      <button onClick={() => setSzamlalo(current => current + 1)}>Növel</button>
    </>
  )
}

export default App
