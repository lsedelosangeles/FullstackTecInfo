# Glosario

>**Nota Importante:** Este glosario de términos técnicos **no esta ordenado alfabéticamente**. Para encontrar un término, se recomienda usar la búsqueda en página para localizarlos (`Ctrl` + `F` en la mayoría de los navegadores).

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

## Solicitud o Petición HTTP

Una petición HTTP es un mensaje que un **[cliente](#cliente)** (como ser un [**navegador web**][l3]) envía a un **[servidor web][l2]** para obtener o enviar datos, usando métodos como `GET` (obtener), `POST` (enviar), `PUT` (actualizar/crear) y `DELETE` (eliminar). Estas peticiones siguen una estructura estándar (mensaje HTTP) que incluye una línea de solicitud (método, URL, versión), cabeceras (información adicional) y, opcionalmente, un cuerpo con datos.

[*Volver al Inicio*][inicio]

***

## Cliente

[*Volver al Inicio*][inicio]

***

## Servidor

[*Volver al Inicio*][inicio]

***

[inicio]: #glosario
[l1]: https://www.seciu.edu.uy/institucional/presentacion
[l2]: Diseño%20Web/funcServicioWeb_Servidor.md
[l3]: Diseño%20Web/funcServicioWeb_Navegador.md