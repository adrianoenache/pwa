import { appName, cacheVersion } from '/webdev/js/pwa-code/pwaConfig.js'

const expectedCaches = [`${cacheVersion}`]

export function activateServiceWorker() {

  self.addEventListener('activate', (event) => {

    caches.keys().then(keys => Promise.all(

      keys.map(key => {

        console.log("### Key = ", key)

        if (!expectedCaches.includes(key)) {

          return caches.delete(key);

        }

      })

    )).then(() => {

      console.warn(`Service Worker activated for app ${appName}, ${cacheVersion} is now ready to handle fetches!`, event)

    })

  })

}
