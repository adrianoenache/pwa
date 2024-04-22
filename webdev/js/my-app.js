import { checkServiceWorkerAndRegister } from '/webdev/js/pwa-code/checkServiceWorkerAndRegister.js'

const initCode = () => {

  checkServiceWorkerAndRegister()

}

window.addEventListener('load', () => {

  initCode()

})
