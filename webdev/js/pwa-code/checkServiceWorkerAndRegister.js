import { appName, serviceWorkerPath, serviceWorkerRegisterConfig } from '/webdev/js/pwa-code/pwaConfig.js'
import { callImage } from '/webdev/js/others/callImage.js'
import { removeTargetChild } from '/webdev/js/others/removeTargetChild.js'

export function checkServiceWorkerAndRegister() {

  if ('serviceWorker' in navigator) {

    navigator.serviceWorker.register(serviceWorkerPath, serviceWorkerRegisterConfig)
    .then(
      (swRegisyer) => {

        console.warn(`### REGISTERED! ###`, swRegisyer)

        removeTargetChild('img[src="/webdev/images/wrong-dog.webp"]')
        callImage('/webdev/images/dog.webp')

      }
    )
    .catch(

      (swRegisyerError) => console.error(`Service Worker ${appName} error on register!!!`, swRegisyerError),

      callImage('/webdev/images/wrong-dog.webp')

    )

  } else {

    console.warn('Service Worker is not avaliable on navigator.')

  }

  if (navigator.serviceWorker.controller) {

    console.warn('Was detected a Service Worker installed.', navigator.serviceWorker.controller)

  }

  navigator.serviceWorker.oncontrollerchange = (event) => {

    console.warn('Was detected a change on Service Worker', event)

  }

}
