---
title: registro masivo de asistencia a eventos
description: combinacion de Excel, VBA y Python que vuelca automaticamente las listas de asistencia a eventos en el portal web corporativo, reduciendo horas de trabajo manual a minutos
date: 2026-01-08
tags: [python, vba, excel, web automation, browser automation]
featured: true
thumbnail: macro-1.jpg
link: ""
github: ""
published: true
result: "registro de 40 personas: 2–3h → 30 minutos, tasa de error ≈ 0"
---

# Problema

Tras cada evento, las listas de asistencia en papel se introducian manualmente en el portal web de la empresa, campo a campo y persona a persona.

Con 40 asistentes, el proceso tardaba entre 2 y 3 horas, y los errores de escritura en nombres eran frecuentes.

# Solucion

Los datos del papel se recogen una sola vez en un archivo Excel. Un script VBA prepara y estructura la informacion, y un script Python se encarga de abrir el portal web y rellenar automaticamente los campos de cada asistente de forma secuencial, sin intervencion humana.

El sistema escala sin limite: 40 o 400 personas requieren el mismo esfuerzo del operador.

# Resultados

- tiempo de registro para 40 personas: de 2-3 horas a aproximadamente 30 minutos
- errores de introduccion manual: eliminados
- escalabilidad: el tiempo de ejecucion no depende del volumen
- unico punto de entrada de datos: el Excel inicial
