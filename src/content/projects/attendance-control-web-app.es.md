---
title: aplicacion web de control de asistencia
description: interfaz web local que centraliza el control de ausencias conectandose a la API de Cezanne, con opcion de despliegue en el servidor de la empresa para uso compartido por todo el equipo
date: 2026-01-09
tags: [python, web app, rest api, cezanne, internal tools, deployment]
featured: true
thumbnail: python web.jpg
link: ""
github: ""
published: true
result: "acceso para todo el equipo, sin conocimientos tecnicos, lista para servidor"
---

# Problema

El script de deteccion de ausencias funcionaba bien, pero requeria ejecucion tecnica y no era accesible para el resto del equipo.

Se necesitaba una solucion que cualquier persona del departamento pudiera consultar sin conocimientos tecnicos, y que los datos persistieran y estuvieran siempre disponibles.

# Solucion

Se desarrollo una aplicacion web que envuelve la logica del script en una interfaz visual accesible desde el navegador.

Funciona en local para pruebas y esta preparada para desplegarse en el servidor interno de la empresa. El acceso esta protegido mediante credenciales vinculadas a la API, de modo que solo usuarios autorizados pueden consultar los datos.

# Resultados

- interfaz accesible para todo el equipo, sin necesidad de ejecutar scripts
- datos de asistencia consultables en tiempo real desde cualquier equipo interno
- lista para despliegue en servidor corporativo
- control de acceso mediante autenticacion API
