# PWA

* Web Apps optimizadas para Mobile.
* Es un estandar de calidad.
* Es como debe pensar primero nuestra web para mobil, primero en nuestros usuarios, en concexiones no tan buenas.
* Pueden funcionar en cualquiera de nuestros dispositivos.
* Gracias a los services workers pueden trabajar ofline, recibir notificaciones e instalarce en la home screen como se hace una aplicación nativa.
* Al indexar en buscadores y ser compartidas en redes es mucho mas fácil conseguir y convertir usuarios con una PWA que con una aplicación nativa.
* El motivo de usarlo es querer tener una aplicación web rápida.
* Restricciones en iOS
  * Solo tenemos 50 MB de espacio disponible, que se pueden borrar en cualquier momento.
  * Utiliza un browser levemente diferente que se debuguea solamente en safari con mac OS.
  * Al volver a la aplicación siempre se resetea la aplicación a la Home screen.
  * No tenemos notificaciones.
  * No funciona en Full Screen.

## App Nativa

* Ofrecen un mejor acceso de mejor calidad a todas las funciones del sistema operativo.
* Mayor libertad de crear aplicaciones avanzadas con un mejor nivel de performance que es difícil en lograrlo con la web.

## Herramientas

### Google Lighthouse

* Es una herramienta oficial de google que viene con chrome.
* Podemos hacer diagnostico de una web app. Se centra en performance, algunos detalles de flexibilidad y tiene una herramienta para testear si la aplicación se considera un PWA.
* Simula un teléfono Nexus 5 y una conexión de mala calidad 3G 400k de conexión y ralentiza el procesador de la computadora.

## Performance

### First Meaningful Paint (Primer pintado significativo)

* Que tiempo tardo en renderizar el navegador la aplicación que tenga algún tipo de sentido. Generalmente este debe ser entre 1 y 2 segundos.
* Concejos de como mejorar estos tiempos.
  * Server Side Rendering: El servidor carga y cachea, desde el servidor el request y renderiza el HTML listo para consumir.
  * Menos HTML y CSS: Tamaño del Payload (Código HTML y CSS)
  * Servers más rápidos: Agregar CDNs o servidores más rápidos.

### First Interactive y Consistently Interactive

* Esta medición indica en que momento esta interactiva la aplicación.

### Time to Interactive

* Reducir la cantidad de JS: Tiene que ver con el framework que estamos utilizado. Lo recomendable debe ser de menos de 5s en una conexión mala.
* Reducir el tiempo de respuesta.

### Web Manifest

* Activa la funcionalidad de Add to Home Screen. 
* Para probar en android se debe tener lo siguiente en cuenta:
  * Todo funcione con HTTPS, que tengamos una conexión encriptada.

## Service Worker

* Es lo que hace posible que las progresive apps funcionen.
* Solo funciona en modo de producción.
* Es un script que el navegador corre detrás escena, que por defecto no tiene acceso a ninguna parte del Browser no puede tocar el DOM directamente, para eso expone una pequeña API con la cual nos podemos comunicar.
* Nos permite tener el control absoluto de lo que pasa tras escena a nivel de Red.
* Podemos controla como se maneja todas y cada una de las request que realiza el navegador. Manejar el cache y decidir diferentes estrategias de Red.
* Soporte Offline
* Proxy In-Browser
* Manejar cache.
* Manejar los Push Notifications.