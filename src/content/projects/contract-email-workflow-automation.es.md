---
title: automatizacion del flujo de contratos y correos
description: "tres botones reemplazan el flujo completo de procesamiento de contratos: generacion de PDF, envio de email con adjunto y archivado de datos"
date: 2026-01-11
tags: [vba, excel, outlook automation, pdf generation, workflow]
featured: true
thumbnail: macro-1.jpg
link: ""
github: ""
published: true
result: "por contrato: 1–2h → 5–10 segundos, ~6h ahorradas al mes"
---

# Problema

Cada vez que se procesaba un contrato, la companera tenia que redactar el email manualmente, buscar el PDF, adjuntarlo, completar los destinatarios y archivar una copia en Excel.

Con varios contratos al mes, el tiempo acumulado era significativo y el proceso dependia de no olvidar ningun paso.

# Solucion

Se creo una macro VBA con tres botones integrados en la hoja de contrato:

- el primero guarda la ficha como PDF para distribucion interna
- el segundo abre Outlook con destinatarios, asunto y texto predefinidos, con el PDF ya adjuntado y listo para revisar y enviar
- el tercero guarda un rango especifico del Excel como PDF de archivo permanente

Esto redujo el flujo a revisar y enviar, en lugar de reconstruir manualmente el mismo proceso en cada contrato.

# Resultados

- tiempo por contrato: de 1-2 horas a 5-10 segundos
- ahorro mensual estimado: aproximadamente 6 horas
- proceso estandarizado: mismo texto y formato en todos los envios
- riesgo de olvidos o errores de adjunto: eliminado
