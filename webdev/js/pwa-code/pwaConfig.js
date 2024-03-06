export const appName = 'my-pwa-app'
export const cacheVersion = appName + '-v-0-0-0'
export const serviceWorkerPath = './serviceworker.js'
export const serviceWorkerRegisterConfig = {
  type: 'module',
  scope: './',
  updateViaCache: 'all'
}
