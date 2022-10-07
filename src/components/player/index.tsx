import { useId, useState } from "react"
import { streamingControl } from "../../services"
import { IAudioProps } from "../../types"
import styles from "./styles.module.css"


export const Player = ({url, poster}:IAudioProps) => {
  const [playing, setPlaying] = useState(false)  
  const [paused, setPaused] = useState(true)
  const uuid = useId()
  
  
  const playPauseAudio = () => {
    const audio = document.getElementById(uuid) as HTMLAudioElement
    setPlaying(prevState=>!prevState)    
    playing ? audio.pause() : audio.play()
    streamingControl(uuid)
  }

  const audio = document.getElementById(uuid) as HTMLAudioElement
  audio && audio.addEventListener("pause", ()=>setPlaying(false))  


  return(
    <div className={styles.card__player}>
      <div className={styles.poster} style={{backgroundImage: `url("${poster}")`}}>
        <div className={styles.play__pause} onClick={ playPauseAudio }
        >
          <img className={styles.spinning__wheel} src="/icons/wheel.png"></img>
          <img src={playing ? "" : "/icons/play.png"}></img>
        </div>
        <audio preload="auto" id={uuid}>
          <source src={url} type="audio/mp3" />
        </audio>
      </div>
      
    </div>
    
  ) 
}   