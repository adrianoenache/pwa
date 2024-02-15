export function doCache(cacheVersion, path) {

  if(!path) return

  console.warn(`Register cache on ${cacheVersion} the path ${path}`)

  caches.open(cacheVersion).then(cache => cache.add(path))

}
