import { appName } from './js/pwaConfig.js'
import { installServiceWorker } from './js/installServiceWorker.js'
import { activateServiceWorker } from './js/activateServiceWorker.js'

console.warn(`App name ${appName}`)

installServiceWorker()
activateServiceWorker()
