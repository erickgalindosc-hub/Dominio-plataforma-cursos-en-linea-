# 🚀 Proyecto Semana 06 — Reporte con Bucles

## 🎯 Objetivo

El objetivo de este proyecto es desarrollar un programa en JavaScript que permita generar un **reporte completo** a partir de una colección de datos, utilizando diferentes tipos de bucles como `for...of` y `for` clásico.

En este caso, el dominio trabajado es una **plataforma de cursos en línea**, donde se analizan distintos cursos según su categoría y duración.

---

## 📚 Dominio del proyecto

**Dominio:** Cursos en plataformas en línea  

Cada elemento representa un curso que contiene:

- 📌 Nombre del curso  
- 🏷️ Categoría (programación, diseño, marketing)  
- ⏱️ Duración en horas  

---

## 🧩 Funcionalidades implementadas

El programa cumple con los siguientes requerimientos:

### 1. 📋 Listado de cursos
Se muestran todos los cursos registrados con su información básica:
- Nombre
- Categoría
- Duración

---

### 2. 📊 Conteo por categoría
Se calcula cuántos cursos hay en cada categoría:
- Programación
- Diseño
- Marketing

---

### 3. 📈 Cálculo de estadísticas
Se realizan operaciones con los datos:
- Total de horas de todos los cursos  
- Promedio de duración  

---

### 4. 🔝 Curso más largo y más corto
El sistema identifica:
- El curso con mayor duración  
- El curso con menor duración  

---

### 5. 📝 Reporte detallado
Se genera un reporte numerado indicando:
- Cuántas horas tiene cada curso  
- Si está **por encima o por debajo del promedio**

---

## 🛠️ Tecnologías usadas

- JavaScript (Node.js)
- Consola (`console.log`)
- Estructuras de control:
  - `for...of`
  - `for` clásico
  - Condicionales (`if`, operador ternario)

---

## ▶️ Cómo ejecutar el proyecto

1. Abre la terminal  
2. Ubícate en la carpeta del proyecto  
3. Ejecuta el siguiente comando:

```bash
node script.js