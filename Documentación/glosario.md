# Glosario

>**Nota Importante:** Este glosario de términos técnicos **no esta ordenado alfabéticamente** (aunque se lo intente ordenar de vez en cuando). Para encontrar un término, se recomienda usar la **búsqueda en página** para localizarlos (`Ctrl` + `F` en la mayoría de los navegadores).

***

## Dominio, o Nombre de Dominio

Se refiere a la dirección única que identifica a un sitio web en Internet. Esta compuesto por un **nombre de segundo nivel** (ejemplo: `www.google`, `www.ceibal`, etc.), *que se indica primero*, y un **dominio de nivel superior** (ejemplo: `.com`, `.com.uy`, `.edu.uy`, `.org`, etc), *que se indica por último*. Los dominios deben adquirirse (más allá de que algunas plataformas ofrezcan sub-dominios gratuitos bajo ciertas condiciones), son otorgados por **organismos reguladores**, ante los cuales deben solicitarse (como ser el [*Servicio Central de Informática de la UdelaR*][l1] en Uruguay), y son manejados a nivel global por el [**DNS**](#dns)

[*Volver al Inicio*][inicio]

***

## IP, o Dirección IP

Se refiere al *identificador único* que recibe un *dispositivo* al conectarse a una red, ya sea de forma local (en una [**LAN**](#lan)), o en Internet. Si el dispositivo aloja algún servicio y lo comparte en esa red, su IP se transforma, además, en un [**nombre de dominio**](#dominio-o-nombre-de-dominio) bajo el cual se puede acceder a dicho servicio.

[*Volver al Inicio*][inicio]

***

## LAN

Significa *Local Area Network* (en español: *Red de Área Local*). Se refiere a cualquier red de computadoras que abarque un área no mayor a la de un hogar, una oficina o un edificio. Una LAN **no está, necesariamente, conectada a Internet**. De ser así, lo hace mediante un [**router**](#router-o-enrutador).

[*Volver al Inicio*][inicio]

***

## DNS

Significa *Domain Name System* (en español: *Sistema de Nombres de Dominio*). Se refiere a un sistema de servidores y bases de datos que asocia un [**nombre de dominio**](#dominio-o-nombre-de-dominio) a una [**dirección IP**](#ip-o-dirección-ip) específica.

[*Volver al Inicio*][inicio]

***

## Router o Enrutador

Se trata de un dispositivo de red que permite a los dispositivos de una red (por ejemplo, una LAN), comunicarse con los dispositivos de otra red (por ejemplo, Internet).

[*Volver al Inicio*][inicio]

***

## HTTP

El *Protocolo de Transferencia de HiperTexto* es un protocolo de la *capa de aplicación* para la transmisión de documentos hipermedia, como ser HTML. Fue diseñado para la comunicación entre los navegadores y servidores web, aunque se puede utilizar para otros propósitos. Sigue el modelo clásico de **Cliente - Servidor**: un cliente establece una conexión con el servidor, realiza una **[petición](#solicitud-o-petición-http)** y espera hasta que recibe una respuesta del mismo. Se trata de un protoclo que no maneja **[estados](#estado-de-la-aplicación)**, ya que el servidor no conserva ningún dato de la petición del cliente luego que termina de responder al mismo. Maneja, sin embargo, **sesiones**, que permiten al servidor identificar al cliente en solicitudes posteriores.

Suele utilizar conexiones tipo `TCP/IP`, pero puede utilizar otros tipos de conexión como ser `UDP`.

[*Volver al Inicio*][inicio]

***

## Solicitud o Petición HTTP

Una petición HTTP es un mensaje que un **[cliente](#cliente)** (como ser un [**navegador web**][l3]) envía a un **[servidor web][l2]** para obtener o enviar datos, usando métodos como `GET` (obtener), `POST` (enviar), `PUT` (actualizar/crear) y `DELETE` (eliminar). Estas peticiones siguen una estructura estándar (mensaje HTTP) que incluye una línea de solicitud (método, URL, versión), cabeceras (información adicional) y, opcionalmente, un cuerpo de mensaje con datos.

[*Volver al Inicio*][inicio]

***

## Respuesta HTTP

Una respuesta HTTP es el mensaje que un servidor web envía de vuelta a un cliente (como ser un [**navegador web**][l3]) para completar una solicitud, indicando el éxito o fallo mediante un código de estado (identificados por números entre 100 y 599), cabeceras y, opcionalmente, un cuerpo de mensaje con el recurso solicitado.

Puede encontrarse más información acerca de los códigos de estado [en este artículo de MDN][l4].

[*Volver al Inicio*][inicio]

***

## Cliente

[*Volver al Inicio*][inicio]

***

## Servidor

[*Volver al Inicio*][inicio]

***

## Estado de la Aplicación

Es el conjunto de datos contenidos en la memoria RAM (variables, archivos abiertos, punteros, etc.) que caracterízan un momento dado de la ejecución de una aplicación.

[*Volver al Inicio*][inicio]

***

## Sesión

[*Volver al Inicio*][inicio]

***

## Puertos

Los **puertos de red**, o simplemente puertos, son un mecanismo utilizado para permitir que una máquina realice **varias conexiones simultáneas a otras máquinas** de modo que los datos contenidos en los paquetes entrantes se dirijan al proceso que los está esperando. Los puertos se identifican por un número comprendido entre 0 y 65.535.

Para acceder a un servicio de red, que esté ejecutándose en un dispositivo de la red, y que utilice un puerto determinado, simplemente debemos enviar nuestras solicitudes a la URL (o el IP) del dispositivo que ejecuta el servicio, seguido por el **número de puerto** que utiliza el servicio (por ejemplo `80`), separados por dos puntos (y **sin espacios**), de la siguiente manera:

- Con una URL: `http:\\url.del.dispositivo : 80`
- Con un IP: `http\\101.102.103.104 : 80`

[*Volver al Inicio*][inicio]

***

## Hipertexto e Hipermedia

Se denomina **Hipertexto** a todo texto que, al ser visualizado en un **[navegador web][l5]** permite, no solo la lectura del mismo, sino que además, mediante secciones interactivas del mismo, denominadas **hipervínculos**, habilita al lector la posibilidad de acceder, o *"navegar"*, hacia otras zonas del documento, otros documentos, u otros archivos. Además, un hipertexto puede contener, en su código o mediante vínculos, **scripts** ejecutables, que añaden funcionalidad y profundizan la interactividad del mismo.

La **Hipermedia** es la combinación de hipertexto con elementos multimedia como ser imágenes, audio, video, de forma interactiva, permitiendo capacidades de navegación e interacción iguales que las del hipertexto.

[*Volver al Inicio*][inicio]

***

## Estilo

[*Volver al Inicio*][inicio]

***

## Scripts

[*Volver al Inicio*][inicio]

***

[inicio]: #glosario
[l1]: https://www.seciu.edu.uy/institucional/presentacion
[l2]: Diseño%20Web/funcServicioWeb_Servidor.md
[l3]: Diseño%20Web/funcServicioWeb_Navegador.md
[l4]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status
[l5]:Diseño%20Web/funcServicioWeb_Navegador.md