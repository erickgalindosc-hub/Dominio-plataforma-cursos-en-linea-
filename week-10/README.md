# 🚀 Proyecto Integrador — Plataformas de Cursos en Línea

## 🎯 Descripción del proyecto

Este proyecto consiste en una **aplicación de consola** desarrollada en JavaScript que simula la gestión de un catálogo de **plataformas de cursos en línea**.

El sistema permite administrar plataformas como Udemy, Coursera, Platzi, entre otras, aplicando todos los conceptos aprendidos en las semanas 01–09.

---

## 🏛️ Dominio

**Plataformas de Cursos en Línea**

Cada elemento del sistema representa una plataforma educativa digital con información como:

- Nombre de la plataforma
- Precio promedio de cursos
- Cantidad de estudiantes
- Estado (activa o inactiva)
- Categoría
- Propiedades opcionales (certificación, universidad asociada, etc.)

---

## 📋 Funcionalidades implementadas

### 🧾 Gestión de datos

- Array principal `items` con mínimo 6 plataformas
- Cada objeto contiene:
  - `id`
  - `name`
  - `price` (propiedad numérica)
  - `students`
  - `active` (booleano)
  - `category`
  - Propiedades opcionales (`certificate`, `university`)

---

### ⚙️ Funciones CRUD

- `addItem(item)` → agrega una nueva plataforma
- `findById(id)` → busca una plataforma por id
- `getActive()` → obtiene plataformas activas
- `filterByField(field, value)` → filtra por campo específico

---

### 📊 Funciones de análisis

- `updateItem(id, changes)` → actualiza datos usando spread (inmutable)
- `calculateStats(field)` → calcula:
  - mínimo
  - máximo
  - promedio
  - total

---

### 🖥️ Funciones de visualización

- `formatItem(item)` → formatea los datos para consola
- `buildReport()` → genera un reporte completo con:
  - listado de plataformas
  - activas vs inactivas
  - estadísticas
  - propiedades del primer elemento

---

## 🧠 Conceptos aplicados

### ✔ Semanas 01–02
- Variables (`const`, `let`)
- Tipos de datos
- Separadores numéricos (`1_000`)

### ✔ Semana 03
- Operadores aritméticos y lógicos

### ✔ Semana 04
- Template literals
- `.padEnd()`
- `.toUpperCase()`

### ✔ Semana 05
- Condicionales (`if`, ternario)

### ✔ Semana 06
- Ciclos (`for`, `for...of`)

### ✔ Semana 07
- Arrow functions
- Optional chaining (`?.`)
- Nullish coalescing (`??`)

### ✔ Semana 08
- `.map()`
- `.filter()`
- `.find()`
- `.sort()`
- `.forEach()`

### ✔ Semana 09
- `Object.keys()`
- `Object.values()`
- `Object.entries()`
- `Object.hasOwn()`
- Spread operator (`...`)

---

## ▶️ Ejecución del proyecto

Para ejecutar el programa:

```bash
node app.js