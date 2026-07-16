# Clases de Laravel: Convenciones de Nombres

## Introducción

En este documento se registrarán las convenciones de nombrado para las clases de Laravel

## Convenciones

### 1 - Migraciones, Modelos, 

Las tablas/entidades en Laravel se nombran **en plural**: *cliente**s***, *usuario**s***

Esto se toma en cuenta al crear la migración con `artisan`, siguiendo este patrón:

```sh
create_nombreDeLaTabla_table
```

Dada una tabla llamada **clientes**, su migración se nombraría

```sh
create_clientes_table
```

### 2 - 
