# 📚 Proyecto Semana 04: Generador de Mensajes

## 🎯 Dominio
**Plataforma de cursos online**

---

## 🧠 Descripción

Este proyecto simula un generador de mensajes para una plataforma de cursos en línea.

El objetivo es mostrar información de un curso (como nombre, categoría, precio y estado) usando métodos de string y template literals para construir salidas en consola de forma clara y organizada.

---

## ⚙️ Funcionalidades

- Generación de una ficha detallada del curso
- Transformación de textos (mayúsculas, minúsculas, limpieza)
- Validaciones sobre el código y la descripción
- Generación de una notificación corta
- Uso de separadores visuales para mejorar la lectura

---

## 🧵 Métodos de string utilizados

- `trim()` → limpiar espacios
- `toUpperCase()` → convertir a mayúsculas
- `toLowerCase()` → convertir a minúsculas
- `slice()` → extraer parte del código
- `includes()` → verificar contenido
- `startsWith()` → validar prefijo
- `endsWith()` → validar sufijo
- `repeat()` → crear separadores visuales

---

## 💡 Lógica aplicada

- Se limpia el nombre del curso
- Se transforma para mostrarlo en distintos formatos
- Se valida que el código tenga el formato correcto
- Se verifica que la descripción contenga palabras clave
- Se genera una ficha tipo tarjeta en consola
- Se muestra una notificación corta

---

## 🚀 Cómo ejecutar

```bash
node script.js