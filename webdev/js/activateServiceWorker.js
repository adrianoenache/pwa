import { appName } from './pwaConfig.js'

export function activateServiceWorker() {

  self.addEventListener('activate', event => {

    console.warn(`Activated from ES module`)
    console.warn(`Service worker activated for ${appName}`)

  })

}
