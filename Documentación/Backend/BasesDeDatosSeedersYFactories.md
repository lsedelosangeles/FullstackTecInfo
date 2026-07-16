# Bases de Datos en Laravel: Seeders Y Factories

## Lista de contenido

1. [Introducción](#introducción)
1. [Factories](#factories)
1. [Seeders](#seeders)
    1. [Sub elemento](#sub-elemento)

***

## Introducción

Para el desarrollo de una aplicación, resulta importante poder comprobar que los datos se comportan de manera adecuada. Para eso necesitamos ingresar datos de prueba. Esta tarea resulta usualmente lenta y tediosa, en especial con estructuras de datos complejas.

Por este motivo Laravel cuenta con elementos que facilitan este proceso: `Seeders` y `Factories`, que pueden ejecutarse durante las migraciones para poblar la base de datos con información adecuada para realizar pruebas.

[_Volver al Inicio_][inicio]
***

## Factories

Los Factories (en inglés, *fábricas*) son clases de Laravel que definen cómo se estructura un dato de prueba para almacenar en la base de datos. Se define un Factory por Modelo, y utiliza la información provista por el modelo para generar datos aleatorios utilizando la librería [Faker][l1].

Para crear un Factory, utilizaremos el siguiente comando de `artisan`:

```sh
php artisan make:factory
```

Para nombrar la factory que queremos crear, debemos seguir la siguiente convención:

| Nombre de la Tabla | Nombre del Modelo | Nombre del Factory | 
| --- | --- | --- |
| clientes | Cliente | ClienteFactory |

> **Nota: Puede verse más información sobre convenciones de nombres de Laravel en la página [_Convenciones de Nombres_][l2] **

## Seeders

Los Seeders (en inglés, *sembradores*) son clases de Laravel que definen c

Contenido del elemento 2

> **Nota: _Esto es una nota informativa_**

### Sub Elemento

Contenido del sub elemento.

[_Volver al Inicio_][inicio]
***

## [Siguiente Documento: ...][siguiente]

[inicio]: #titulo
[siguiente]: siguienteDoc.md
[l1]: https://fakerphp.org/
[l2]: ConvencionesDeNombres.md
