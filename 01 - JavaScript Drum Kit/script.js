addEventListener("keydown", (event) => {
  const key = event.keyCode
  const keyElement = document.querySelector(`[data-key="${key}"]`)
  const audioElement = document.querySelector(`audio[data-key="${key}"]`)

  if (keyElement) {
    if (audioElement) {
      audioElement.play()
      audioElement.addEventListener("ended", function () {
        keyElement.classList.remove("playing")
      })
    }

    keyElement.classList.add("playing")
  }
})
