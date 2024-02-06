import { appName } from './pwaConfig.js'

export function installServiceWorker() {

  self.addEventListener('install', event => {

    console.warn(`Install from ES module`)
    console.warn(`Service worker installed for ${appName}`)

  })

}
