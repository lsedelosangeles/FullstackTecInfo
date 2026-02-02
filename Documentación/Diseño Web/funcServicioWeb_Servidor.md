# Introducción al Diseño Web

## El Servidor Web

### Contenido

1. [Concepto](#concepto)
2. Funcionamiento básico

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

Esta comunicación se logra, por lo general, mediante una conección abierta en el puerto 80 (tráfico sin encriptar), o los puertos 443 ó 8080 (tráfico encriptado mediante SSL/TLS).



[l1]: https://httpd.apache.org/
[l2]: https://nginx.org/
[l3]: ../glosario.md#http