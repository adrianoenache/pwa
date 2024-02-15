import { appName, cacheVersion } from './pwaConfig.js'

export function activateServiceWorker() {

  self.addEventListener('activate', event => {

    console.warn('Activated from ES module')
    console.warn(`Service worker activated for app ${appName}`)
    console.warn(`${cacheVersion} is now ready to handle fetches!`)

  })

}
