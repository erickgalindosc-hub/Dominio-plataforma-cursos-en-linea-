
# 📚 Proyecto Semana 05 - Clasificador

## 🎯 Objetivo

El objetivo de este proyecto es aplicar estructuras condicionales en JavaScript para clasificar un elemento dentro de un dominio específico.

En este caso, el dominio trabajado es una **plataforma de cursos en línea**, donde se analiza un curso según diferentes características.

---

## 🧠 Descripción

En este script se simula la información de un curso dentro de una plataforma educativa.

Se toman datos como:

- Nombre del curso
- Estado (activo o inactivo)
- Nivel de popularidad
- Categoría del curso
- Información adicional (como instructor o descripción)

Con estos datos, el sistema clasifica el curso y muestra una ficha en consola.

---

## ⚙️ Herramientas usadas

- JavaScript (Node.js)
- Estructuras condicionales:
  - `if / else if / else`
  - Operador ternario `? :`
  - `switch`
- Características modernas:
  - `??` (nullish coalescing)
  - `?.` (optional chaining)

---

## 🧩 ¿Qué hace el programa?

### ✔ Clasificación del curso
Según su popularidad:
- Muy popular
- Popularidad media
- Poco popular

### ✔ Estado del curso
Determina si el curso está:
- Disponible
- No disponible

### ✔ Tipo de curso
Clasifica el curso como:
- Programación
- Diseño
- Marketing

### ✔ Manejo de datos faltantes
- Usa `??` para valores por defecto
- Usa `?.` para evitar errores al acceder a propiedades

---

## ▶️ Cómo ejecutar

1. Abre la terminal
2. Ve a la carpeta del proyecto
3. Ejecuta:

```bash
node script.js