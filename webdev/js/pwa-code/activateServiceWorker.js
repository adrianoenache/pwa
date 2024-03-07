import { appName, cacheVersion } from '/webdev/js/pwa-code/pwaConfig.js'

export function activateServiceWorker() {

  self.addEventListener('activate', (event) => {

    console.warn(`Service Worker activated for app ${appName}, ${cacheVersion} is now ready to handle fetches!`, event)

  })

}
