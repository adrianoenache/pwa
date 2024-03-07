import { appName } from '/webdev/js/pwa-code/pwaConfig.js'
import { installServiceWorker } from '/webdev/js/pwa-code/installServiceWorker.js'
import { activateServiceWorker } from '/webdev/js/pwa-code/activateServiceWorker.js'
import { fetchServiceWorker } from '/webdev/js/pwa-code/fetchServiceWorker.js'

console.warn(`App name ${appName}`)

installServiceWorker()
activateServiceWorker()
fetchServiceWorker()
