export function fetchServiceWorker() {

  self.addEventListener('fetch', event => {

    const url = new URL(event.request.url)

    /*
    console.log("### 1")
    console.log("fetch hello")
    console.log("fetch event.request.url = ", event.request.url)

    console.log("### 2")
    console.log("fetch url = ", url)
    console.log("fetch url.origin = ", url.origin)
    console.log("fetch location.origin = ", location.origin)
    console.log("fetch url.pathname = ", url.pathname)

    console.log("### 3")

    const rx = url.origin == location.origin
    const ry = url.pathname == '/webdev/images/dog.webp'

    console.log("fetch url.origin == location.origin = ", rx)
    console.log("fetch url.pathname == '/webdev/images/dog.webp' = ", ry)
    */

    if (url.origin == location.origin && url.pathname == '/webdev/images/dog.webp') {

      event.respondWith(caches.match('/webdev/images/cat.webp'));

    }

  })

}
