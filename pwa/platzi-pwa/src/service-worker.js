/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */

if (typeof importScripts === 'function') {
  importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');
  /* global workbox */
  if (workbox) {
    // Tomar el precatsch manifest y los va guardar tras escenas
    workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);


    workbox.googleAnalytics.initialize();
    
    // Cuando se realiza el request a un dominio externo siempre se debe indicar la URL completa.
    workbox.routing.registerRoute(/^https?:\/\/www.themealdb.com\/api\/.*/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

    workbox.routing.registerRoute(/^https:\/\/fonts.(?:googleapis|gstatic).com\/(.*)/, 
    new workbox.strategies. CacheFirst({
      // Poniendo el nombre a la cache
      cacheName: 'google-fonts-cache',
      plugins: [
        // Poniendo fecha de expiracion
        new workbox.expiration.ExpirationPlugin({
          // Indicandole que se expire a 30 dias, se debe asignar un tiempo razonable
          maxAgeSeconds: 30 * 24 * 60 * 60
        })
      ]
    }),
    'GET');

    // La por defecto va al final de todo
    // Workbox por defecto lidea con el mismo dominio
    workbox.routing.registerRoute(/^https?.*/, new workbox.strategies.NetworkFirst(), 'GET');
  }
}