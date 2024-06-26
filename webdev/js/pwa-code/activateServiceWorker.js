import { appName, cacheVersion } from '/webdev/js/pwa-code/pwaConfig.js'
import { cleanCache } from '/webdev/js/pwa-code/cleanCache.js'

const currentCache = [`${cacheVersion}`]

export function activateServiceWorker() {

  self.addEventListener('activate', (event) => {

    console.warn(`### ACTIVATED ### for app ${appName}, ${cacheVersion} is now ready to handle fetches!`, event)

    cleanCache(currentCache)

  })

}
