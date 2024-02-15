import { appName } from './pwaConfig.js'
import { callImage } from './callImage.js'

export function checkServiceWorkerAndRegister() {

  if ('serviceWorker' in navigator) {

    console.warn(`Call to register Service Worker ${appName}.`)

    navigator.serviceWorker.register('./serviceworker.js', {
      type: 'module'
    })
      .then(swRegisyer => console.warn(`Service Worker ${appName} registered!`, swRegisyer))
      .catch(swRegisyerError => console.error(`Service Worker ${appName} error on register!!!`, swRegisyerError))

    callImage('images/dog.webp')

  } else {

    console.warn('Service Worker is not avaliable on navigator.')

  }

}
