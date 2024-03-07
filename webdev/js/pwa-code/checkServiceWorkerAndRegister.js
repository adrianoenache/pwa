import { appName, serviceWorkerPath, serviceWorkerRegisterConfig } from '/webdev/js/pwa-code/pwaConfig.js'
import { callImage } from '/webdev/js/others/callImage.js'

export function checkServiceWorkerAndRegister() {

  if ('serviceWorker' in navigator) {

    console.warn(`Call to register Service Worker ${appName}.`)

    navigator.serviceWorker.register(serviceWorkerPath, serviceWorkerRegisterConfig)
      .then(
        (swRegisyer) => {

          if (swRegisyer.installing) {

            console.warn('Service Worker status = installing')

          } else if (swRegisyer.waiting) {

            console.warn('Service Worker status = installed')

          } else if (swRegisyer.active) {

            console.warn('Service Worker status = active')

          }

          console.warn(`Service Worker ${appName} registered!`, swRegisyer)

        }
      )
      .catch(

        (swRegisyerError) => console.error(`Service Worker ${appName} error on register!!!`, swRegisyerError)

      )

    callImage('/webdev/images/dog.webp')

  } else {

    console.warn('Service Worker is not avaliable on navigator.')

  }

}
