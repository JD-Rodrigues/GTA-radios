import { useEffect, useState } from "react"
import "./App.css"
import { Player } from "./components/player"


function App() {
  const [radios, setRadio] = useState([{player_path:"",name:"", poster_path:""}])
  const [broadcast, setBroadcast] = useState("")


  const getData = async ()=> {
    const database = await fetch("database.json")
    const databaseJson = await database.json()
    setRadio(await databaseJson.radios)   
    console.log(radios) 
  }

  

  useEffect(()=>{
    getData()   
    
  },[])


  return (
    <div className="App">
      <header>
        <h1 className="logo">gta radios</h1>
      </header>
      <main className="container">
        <ul className="radios__pad container">
          {radios && radios.map(radio=> <li key={radio.name}><Player url={radio.player_path} poster={radio.poster_path}/></li>)}
        </ul>    
      </main>
    </div>
  )
}

export default App
