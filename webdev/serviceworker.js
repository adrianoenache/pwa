self.addEventListener('install', event => {

    console.warn('Service worker installed')

})

self.addEventListener('activate', event => {

    console.warn('Service worker activated')

})
