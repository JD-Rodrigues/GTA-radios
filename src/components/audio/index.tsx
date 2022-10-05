import { IAudioProps } from "../../assets/types"


export const Player = ({url}:IAudioProps) => {
  return(
    <audio controls preload="auto">
      <source src={url} type="audio/mp3" />
    </audio>
  ) 
}   