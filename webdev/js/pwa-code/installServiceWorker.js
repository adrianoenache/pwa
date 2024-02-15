import { appName, cacheVersion } from './pwaConfig.js'
import { doCache } from './doCache.js'

export function installServiceWorker() {

  self.addEventListener('install', event => {

    console.warn('Install from ES module')
    console.warn(`Service worker installed for ${appName}`)

    event.waitUntil(

      doCache(cacheVersion, 'images/cat.webp')

    )

  })

}
