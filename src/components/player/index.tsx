import { useId, useState } from "react"
import { IAudioProps } from "../../types"
import styles from "./styles.module.css"


export const Player = ({url, poster}:IAudioProps) => {
  const [playing, setPlaying] = useState(false)  
  const uuid = useId()
  
  const playAudio = () => {
    setPlaying(prevState=>!prevState)
    const audio = document.getElementById(uuid) as HTMLAudioElement
    playing ? audio.pause() : audio.play()
  }
  // const playPause =  async () => { 
  //   setPlaying(true)
  // }


  return(
    <div className={styles.card__player}>
      <div className={styles.poster} style={{backgroundImage: `url("${poster}")`}}>
        <div className={styles.play__pause} onClick={ playAudio}
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