export function cleanCache(currentCache) {

  return new Promise(() => {

    caches.keys().then(keys => Promise.all(

      keys.map(key => {

        if (currentCache.includes(key)) console.warn("Current cache = ", key)

        if (!currentCache.includes(key)) {

          console.warn("Delete cache = ", key)

          return caches.delete(key);

        }

      })

    ))

  })

}
