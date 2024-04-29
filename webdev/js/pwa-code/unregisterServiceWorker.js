export function unregisterServiceWorker() {

  navigator.serviceWorker.getRegistrations()
  .then(

    (registers) => {

      for (let register of registers) {

        register.unregister()
        .then(

          (isUnregister) => console.warn(`Service Worker ${register} is unregister: `, isUnregister)

        )

      }

    }

  )

}
