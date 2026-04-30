---
title: deteccion automatica de ausencias y reporte diario
description: script Python que consulta la API de Cezanne diariamente e identifica automaticamente los empleados sin fichaje, generando un informe listo para usar
date: 2026-01-10
tags: [python, rest api, cezanne, automation, hr analytics]
featured: true
thumbnail: API.jpg
link: ""
github: ""
published: true
result: "nueva capacidad desde cero, no existia proceso previo"
---

# Problema

El departamento no disponia de un proceso sistematico para detectar ausencias no comunicadas.

Verificar manualmente los fichajes de todos los empleados requeriria revisar el sistema uno a uno, lo que hacia inviable hacerlo de forma rutinaria.

# Solucion

Se desarrollo un script Python que se conecta a la API REST de Cezanne, extrae los registros de fichaje del dia en curso y los cruza con el listado de empleados activos.

Los empleados sin registro son identificados automaticamente y el resultado se presenta en un informe estructurado, sin intervencion manual.

# Resultados

- capacidad nueva para el departamento: proceso que antes no existia
- deteccion diaria automatizada sin revision manual
- informe generado en segundos, disponible para actuar de inmediato
- base para la evolucion hacia la aplicacion web de control de asistencia
