---
title: autorellenado de incorporacion en Sigma
description: script Python que vuelca automaticamente los datos de nuevos empleados en el sistema Sigma, respaldado por una base de datos SQL con informacion de titulaciones universitarias
date: 2026-01-07
tags: [python, sqlite, sql, web automation, database, onboarding]
featured: true
thumbnail: macro-1.jpg
link: ""
github: ""
published: true
result: "doble entrada eliminada, ~3h ahorradas al mes"
---

# Problema

Al incorporar un nuevo empleado, los mismos datos ya registrados en Excel debian volver a introducirse manualmente en el sistema Sigma.

Ademas, completar los campos de titulacion requeria buscar manualmente los datos academicos de cada universidad, lo que alargaba el proceso de onboarding.

# Solucion

Se desarrollo un script Python que lee los datos del empleado desde el archivo Excel maestro y los introduce automaticamente en Sigma a traves del navegador.

Para los campos de titulacion, se creo una base de datos SQLite que almacena informacion estructurada de universidades y programas academicos, permitiendo consultas rapidas y reutilizables en cada nueva incorporacion.

# Resultados

- doble introduccion de datos: eliminada
- ahorro mensual estimado: aproximadamente 3 horas
- base de datos universitaria reutilizable y ampliable
- proceso de onboarding mas rapido y consistente
