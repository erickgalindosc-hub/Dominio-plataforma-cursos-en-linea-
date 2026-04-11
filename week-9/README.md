# 📦 Proyecto: Catálogo de Plataformas de Cursos en Línea

## 🎯 Descripción del dominio

Este proyecto representa un **catálogo de plataformas de cursos en línea**, donde se gestionan diferentes servicios educativos digitales como Udemy, Coursera, Platzi, entre otros.

Cada plataforma contiene información relevante como:
- Nombre
- Precio promedio de cursos
- Estado (activa o no)
- Cantidad de estudiantes
- Propiedades opcionales como certificación o universidad asociada

El objetivo es aplicar conceptos de JavaScript como objetos, arrays y métodos avanzados para manipular datos.

---

## 🧠 Funcionalidades implementadas

### 📋 Gestión de datos
- Se creó un array `items` con 6 plataformas
- Cada objeto contiene:
  - `id`
  - `name`
  - `price` (numérico)
  - `active` (booleano)
  - `students`
  - Propiedades opcionales (`certificate`, `university`)

---

### 🔍 Uso de Object.*

- `Object.entries()` → para mostrar detalles de una plataforma
- `Object.values()` → para calcular estadísticas (precio total, promedio, etc.)

---

### ✅ Validación de propiedades

- Uso de `Object.hasOwn()` para verificar propiedades opcionales antes de mostrarlas

---

### 🔁 Iteración

- Uso de `for...in` para recorrer todas las propiedades de un objeto

---

### 🧬 Spread Operator

- Se creó una copia de un objeto
- Se aplicó una actualización inmutable sin modificar el original

---

### ⚙️ Operaciones con arrays

- `filter()` → obtener plataformas activas
- `find()` → buscar por id
- `map()` → agregar propiedad calculada (`priceWithTax`)
- `sort()` → ordenar por precio sin modificar el array original

---

### 📊 Reporte final

El programa imprime en consola:
- Total de plataformas
- Plataformas activas
- Estadísticas de precios
- Lista ordenada por precio
- Plataforma más cara y más barata

---

## ▶️ Ejecución

Para ejecutar el proyecto usa:

```bash
node script.js