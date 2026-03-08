# 📦 Proyecto Semana 02 - Ficha de Datos del Dominio

## 📚 Dominio: Plataforma de Cursos en Línea

Este proyecto forma parte de la **Semana 2 del Bootcamp de JavaScript**, donde se trabajan **variables y tipos de datos**.

El objetivo es crear un **script en JavaScript** que muestre en consola la ficha de datos de un elemento dentro de un dominio específico.  
En este caso, el dominio es una **plataforma de cursos en línea** y la entidad representada es un **curso**.

---

# 🎯 Objetivo del Proyecto

Aplicar conceptos fundamentales de JavaScript como:

- Declaración de variables con `const`
- Uso de tipos de datos primitivos
- Uso del operador `typeof`
- Conversión explícita de tipos
- Uso de `console.log()` para mostrar información en consola
- Organización de datos usando **template literals**

---

# ⚙️ ¿Qué hace el código?

El archivo **script.js** genera en la consola una **ficha de datos de un curso** dentro de una plataforma educativa.

El programa muestra varias secciones con información organizada.

---

# 🧾 1. Datos principales

Se definen variables con información del curso:

- Nombre del dominio
- Nombre del curso
- Categoría
- Cantidad de estudiantes
- Disponibilidad del curso
- Un valor `null` que representa información pendiente

Ejemplo de variables:

```javascript
const DOMAIN_NAME = "Plataforma de Cursos en Línea";
const itemName = "JavaScript para Principiantes";
const itemCategory = "Programación Web";
const itemQuantity = 120;
const isItemAvailable = true;
const instructorPending = null;