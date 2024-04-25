export const appName = 'my-pwa-app'
export const cacheVersion = appName + '-v-0-0-1'
export const serviceWorkerPath = '/webdev/serviceworker.js'
export const serviceWorkerRegisterConfig = {
  type: 'module',
  scope: '/webdev/',
  updateViaCache: 'all'
}
export const callTheUpdateOnTheInterval = 2000
