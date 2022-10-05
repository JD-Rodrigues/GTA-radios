import { useEffect, useState } from "react"
import "./App.css"
import ReactPlayer from "react-player"
import { Player } from "./components/audio"

function App() {

  const [radios, setRadio] = useState([{player_path:"",name:""}])
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
        <img src=""></img>
      </header>
      <main>
        
          {radios && radios.map(radio=> <Player key={radio.name} url={radio.player_path}/>)}
          
        <button onClick={play}>Play</button>
      </main>
    </div>
  )
}

export default App
