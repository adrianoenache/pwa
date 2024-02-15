export function callImage(path) {

  if(!path) return

  setTimeout(() => {
    const img = new Image()
    img.src = path
    document.body.appendChild(img)
  }, 3000)

}
