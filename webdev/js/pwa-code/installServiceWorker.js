import { appName, cacheVersion } from '/webdev/js/pwa-code/pwaConfig.js'
import { doCache } from '/webdev/js/pwa-code/doCache.js'

export function installServiceWorker() {

  self.addEventListener('install', (event) => {

    console.warn(`### INSTALLED ### cache version = ${cacheVersion}`, event)

    self.skipWaiting()

    event.waitUntil(

      doCache(cacheVersion, '/webdev/images/big-cat.webp')

    )

  })

}
