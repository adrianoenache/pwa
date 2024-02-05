export function checkServiceWorkerAndRegister() {

    if ('serviceWorker' in navigator) {

        console.warn('Call to register Service Worker.')

        navigator.serviceWorker.register('./serviceworker.js');

     } else {

        console.warn('Service Worker is not avaliable on navigator.')
     }

}
