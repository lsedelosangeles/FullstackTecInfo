# Introducción al Diseño Web

## El Servidor Web

### Contenido

1. [Concepto](#concepto)
2. [Funcionamiento Básico](#funcionamiento-básico)

***

## Concepto

Un servidor web es una aplicación que, al ejecutarse, permite acceder, mediante [**peticiones HTTP**](../glosario.md), al contenido de sitios web alojados en el almacenamiento de la computadora.

Existen muchos ejemplos, siendo los más populares:

- [Apache HTTP Server][l1]
- [nginx][l2]

Para ello, se debe configurar **explicitamente** cada instancia del servidor que usaremos para indicarle qué directorios contienen los archivos que el mismo debe manejar, y cómo debe hacerlo.

***

## Funcionamiento Básico

Los servidores web, por descarte, envían información a cualquier cliente que haga solicitudes mediante el protocolo [**HTTP**][l3].

Esta comunicación se logra, por lo general, mediante una conección abierta en el puerto 80 (tráfico sin encriptar), o los puertos 443 ó 8080 (tráfico encriptado mediante SSL/TLS) del sistema que esté ejecutando el servidor. En esos puertos, el servidor permanece "a la escucha", en espera de una solicitud.

Las solicitudes HTTP tienen esta estructura:

1. El cliente abre una conexión con el servidor, hacia la URL (o IP y puerto) del servidor
1. Si la conexión es exitosa, el cliente envía una **[petición][l4]**, formada de la siguiente manera:

    1. ***Método***: Especifica la forma en que se envían los datos de la petición, la naturaleza de la misma (lo que se quiere lograr con la petición), y cómo se esperan los datos de la respuesta.

        - Los métodos más comunes suelen ser:
    
            - `GET` para ***obtener*** *recursos o registros públicos*
            - `POST` para ***crear*** *registros nuevos*
            - `PUT` para ***actualizar*** *registros existentes*
            - `DELETE` para ***eliminar*** *registros existentes*

    1. ***Ruta***: La ubicación del recurso solicitado, ya sea real (un archivo en un directorio específico), o virtual (una funcionalidad que debe ejecutarse en el servidor).
    1. ***Versión del protocolo***
    1. ***Cabeceras HTTP***: Complementos que aportan información extra al servidor sobre la petición.
    1. ***Cuerpo del mensaje (opcional)***: Información que acompaña a la petición. Este componente de la solicitud es muy importante para métodos como `POST` o `PUT`, que lo utilizan para transmitir la información de la misma.

1. El servidor recibe y procesa la solicitud y emite una **[respuesta][l5]**. De forma semejante a las solicitudes, las respuestas tienen una estructura:

    1. ***Versión del protocolo***
    1. ***Código de Estado***: Indica si la petición ha sido exitosa o no, y qué tipo de problemas hubo.
    1. ***Mensaje de Estado***: Complementa y expande el elemento anterior
    1. ***Cabeceras HTTP***: Complementos que aportan información extra al servidor sobre la petición.

[l1]: https://httpd.apache.org/
[l2]: https://nginx.org/
[l3]: ../glosario.md#http
[l4]: ../glosario.md#solicitud-o-petición-http
[l5]: ../glosario.md#respuesta-http
