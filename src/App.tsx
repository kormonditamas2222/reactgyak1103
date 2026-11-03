import { useEffect, useState } from 'react'
import './App.css'
import { Users } from './components/Users';

function App() {
  const [szamlalo, setSzamlalo] = useState(0)
  const [nev, setNev] = useState("tamas")

  useEffect(() => console.log("1. effect minden renderelés után"));
  useEffect(() => console.log("2. effect első megjelenítés"), []);
  useEffect(() => {
    console.log("3. effect egy vagy több változó módosításánál");
    document.title = `${nev} ${szamlalo}`
  }, [szamlalo, nev])
  return (
    <>
      <h1>React hookok: Use effect</h1>
      <p>Érték: {szamlalo}</p>
      <button onClick={() => setSzamlalo(current => current + 1)}>Növel</button>
      <button onClick={() => setNev("Tamás")}>Név módosítása</button>
      <Users/>
    </>
  )
}

export default App
