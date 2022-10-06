import { useEffect, useState } from "react"
import "./App.css"
import { Player } from "./components/audio"

function App() {

  const [radios, setRadio] = useState([{player_path:"",name:"", poster_path:""}])
  function play() {
    const audio = document.querySelector("audio") as HTMLAudioElement
    audio.play()
  }
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
        <div className="radios__pad container">
          {radios && radios.map(radio=> <Player key={radio.name} url={radio.player_path} poster={radio.poster_path}/>)}
        </div>
        
          
          

      </main>
    </div>
  )
}

export default App
