import { IAudioProps } from "../../types"
import styles from "./styles.module.css"


export const Player = ({url, poster}:IAudioProps) => {
  return(
    <div className={styles.card__player}>
      <div className={styles.poster} style={{backgroundImage: `url("${poster}")`}}>
        <audio preload="auto">
          <source src={url} type="audio/mp3" />
        </audio>
      </div>
      
    </div>
    
  ) 
}   