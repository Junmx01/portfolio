---
title: sincronizacion automatica de datos de empleados
description: herramienta VBA que elimina la revision manual entre multiples archivos Excel, consolidando datos en segundos con proteccion de campos criticos
date: 2026-01-12
tags: [vba, excel, sincronizacion de datos, proteccion condicional, automatizacion]
featured: true
thumbnail: macro-1.jpg
images:
  - macro-2.jpg
  - macro-3.jpg
  - macro-4.jpg
  - macro-5.jpg
link: ""
github: ""
published: true
result: "~8h ahorradas al mes, errores manuales eliminados"
---

<video controls muted playsinline preload="metadata" poster="/content/images/projects/macro-1.jpg">
  <source src="/content/images/projects/Excel.mp4" type="video/mp4" />
</video>

# Problema

La persona responsable de RR. HH. actualizaba manualmente la hoja maestra comparando varios archivos Excel.
El proceso tardaba entre 1 y 2 horas, exigia atencion constante y era facil cometer errores al copiar datos entre hojas.

Ademas, algunos campos criticos ya habian sido validados manualmente y no debian sobrescribirse.
Eso hacia que la tarea fuera lenta, repetitiva y especialmente delicada.

# Solucion

Se desarrollo una macro VBA con dos botones principales:

- el primero recorre automaticamente los archivos fuente y vuelca la informacion en la hoja maestra
- el segundo ejecuta una verificacion de vencimientos para detectar contratos proximos a expirar

Los campos marcados en rojo quedan protegidos y nunca se sobreescriben, preservando la informacion que ya habia sido revisada manualmente.
De este modo, la automatizacion acelera la actualizacion sin perder control sobre los datos sensibles.

# Resultados

- tiempo por actualizacion: de 1-2 horas a menos de 30 segundos
- ahorro mensual estimado: aproximadamente 8 horas
- errores por copia manual: eliminados
- alertas automaticas de contratos proximos a vencer
