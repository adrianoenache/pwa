import { appName, cacheVersion } from '/webdev/js/pwa-code/pwaConfig.js'
import { doCache } from '/webdev/js/pwa-code/doCache.js'

export function installServiceWorker() {

  self.addEventListener('install', (event) => {

    console.warn(`Service worker installed for ${appName}`, event)

    event.waitUntil(

      doCache(cacheVersion, '/webdev/images/cat.webp')

    )

  })

}
