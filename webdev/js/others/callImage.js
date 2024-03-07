export function callImage(path, alt, title, width, height, loading) {

  if(!path) return

  const img = new Image()

  img.alt = alt || 'Fill alt image'
  img.height = height || '400'
  img.loading = loading || 'lazy'
  img.src = path
  img.title = title || 'Fill title image'
  img.width = width || '400'

  document.body.appendChild(img)

}
