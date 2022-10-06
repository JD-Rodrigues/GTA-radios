import { useState } from "react"
import { IAudioProps } from "../../types"
import styles from "./styles.module.css"


export const Player = ({url, poster}:IAudioProps) => {
const [playing, setPlaying] = useState(false)

  return(
    <div className={styles.card__player}>
      <div className={styles.poster} style={{backgroundImage: `url("${poster}")`}}>
        <audio preload="auto">
          <source src={url} type="audio/mp3" />
        </audio>
        <div className={styles.play__pause} onClick={()=>setPlaying(true)}>
            <img src={playing ? "/icons/pause.png" : "/icons/play.png"}></img>
        </div>
      </div>
      
    </div>
    
  ) 
}   