export function fetchServiceWorker() {

  self.addEventListener('fetch', (event) => {

    console.warn('### FETCH ### intercepted a http request', event.request.url, 'from clientId', event.clientId)

    const url = new URL(event.request.url)

    if (url.origin == location.origin && url.pathname == '/webdev/images/dog.webp') {

      event.respondWith(caches.match('/webdev/images/big-cat.webp'))

    }

  })

}
