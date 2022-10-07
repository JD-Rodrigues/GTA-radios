import React from "react";

export const streamingControl = (id:string) => {
  const audios = document.querySelectorAll("audio")
  audios.forEach(audio=> audio.id !== id && audio.pause())
}