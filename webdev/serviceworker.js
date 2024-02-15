import { appName } from './js/pwa-code/pwaConfig.js'
import { installServiceWorker } from './js/pwa-code/installServiceWorker.js'
import { activateServiceWorker } from './js/pwa-code/activateServiceWorker.js'
import { fetchServiceWorker } from './js/pwa-code/fetchServiceWorker.js'

console.warn(`App name ${appName}`)

installServiceWorker()
activateServiceWorker()
fetchServiceWorker()
