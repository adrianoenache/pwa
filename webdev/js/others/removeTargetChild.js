export function removeTargetChild(targetChild) {

  const target = document.querySelector(targetChild)

  if(!target) return

  target.remove()

}
