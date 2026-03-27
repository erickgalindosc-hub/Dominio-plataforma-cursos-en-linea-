"use strict";
// Activa el modo estricto de JavaScript para evitar errores comunes
// y hacer el código más seguro.

// ===============================
// CONFIGURACIÓN DEL DOMINIO
// ===============================

const DOMAIN_NAME = "Cursos Online";
// Nombre del sistema que se mostrará en el reporte

const VALUE_LABEL = "cursos";
// Etiqueta que describe los elementos del inventario


// ===============================
// 1. ARRAY INICIAL
// ===============================

const items = [
  { id: 1, name: "JavaScript", category: "programación", price: 50, active: true, students: 120 },
  { id: 2, name: "UX/UI", category: "diseño", price: 40, active: true, students: 80 },
  { id: 3, name: "Marketing", category: "marketing", price: 30, active: false, students: 60 },
  { id: 4, name: "Python", category: "programación", price: 60, active: true, students: 150 },
  { id: 5, name: "Excel", category: "ofimática", price: 25, active: false, students: 70 }
];
// Este array representa el inventario de cursos.
// Cada objeto contiene:
// id → identificador único
// name → nombre del curso
// category → categoría del curso
// price → precio del curso (valor numérico)
// active → indica si el curso está disponible (true o false)
// students → cantidad de estudiantes inscritos


// ===============================
// 2. FUNCIONES DE GESTIÓN
// ===============================


// Agrega un nuevo curso al final del array
const addItem = (newItem) => {
  items.push(newItem); // Añade el nuevo curso al final
  console.log(`Agregado: ${newItem.name}`);
};


// Elimina el último curso del array
const removeLastItem = () => {
  const removed = items.pop(); // Elimina el último elemento
  console.log(`Eliminado: ${removed.name}`);
  return removed; // Devuelve el curso eliminado
};


// Agrega un curso al inicio del array (prioridad)
const addPriorityItem = (priorityItem) => {
  items.unshift(priorityItem); // Inserta el curso al inicio
  console.log(`Elemento prioritario agregado: ${priorityItem.name}`);
};


// Elimina un curso según su posición en el array
const removeByIndex = (index) => {
  const removed = items.splice(index, 1); 
  // splice elimina 1 elemento en la posición indicada
  console.log(`Elemento eliminado: ${removed[0].name}`);
};


// Obtiene solo los cursos activos
const getActiveItems = () => {
  return items.filter(course => course.active === true);
  // filter crea un nuevo array con los cursos que cumplen la condición
};


// Busca un curso por su nombre
const findByName = (name) => {
  return items.find(course => course.name === name);
  // find devuelve el primer elemento que coincida
};


// Formatea la información de un curso para mostrarlo en consola
const formatItem = (item) => {
  return `${item.name} - ${item.category} | Precio: ${item.price} | Estudiantes: ${item.students}`;
};


// ===============================
// 3. REPORTE
// ===============================


// Muestra un encabezado del reporte
console.log(`\n${"=".repeat(50)}`);
console.log(`GESTIÓN DE ${DOMAIN_NAME.toUpperCase()}`);
console.log(`${"=".repeat(50)}\n`);


// Muestra el estado inicial del inventario
console.log(`Inventario inicial (${items.length} ${VALUE_LABEL}):`);

items.forEach(item => {
  // forEach recorre el array y ejecuta una función por cada elemento
  console.log(`  ${formatItem(item)}`);
});


console.log("\n--- Operaciones de mutación ---\n");


// Se agrega un nuevo curso al final
addItem({ id: 6, name: "React", category: "programación", price: 55, active: true, students: 90 });


// Se agrega un curso prioritario al inicio
addPriorityItem({ id: 0, name: "Curso Premium", category: "especial", price: 100, active: true, students: 200 });


// Se elimina un curso en una posición específica
removeByIndex(2);


// Se elimina el último curso del array
removeLastItem();


// Muestra el inventario después de las modificaciones
console.log("\n--- Inventario actualizado ---\n");

items.forEach(item => {
  console.log(`  ${formatItem(item)}`);
});


// ===============================
// BÚSQUEDA Y FILTRADO
// ===============================

console.log("\n--- Búsqueda ---\n");

// Busca un curso específico por nombre
const found = findByName("Python");
console.log("Curso encontrado:", found);


// Filtra los cursos activos
const activeCourses = getActiveItems();
console.log(`Cursos activos: ${activeCourses.length}`);


// ===============================
// USO DEL SPREAD OPERATOR
// ===============================

// Crea una copia del array y agrega un nuevo curso sin modificar el original
const copyItems = [...items, { id: 99, name: "Nuevo Curso", category: "extra", price: 20, active: true, students: 10 }];

console.log("Cantidad en copia con nuevo elemento:", copyItems.length);


// ===============================
// TRANSFORMACIÓN CON MAP
// ===============================

console.log("\n--- Transformación ---\n");

// Obtiene un array solo con los nombres de los cursos
const names = items.map(item => item.name);
console.log("Nombres:", names);


// Crea un nuevo array con precios con descuento
const discounted = items.map(item => ({
  name: item.name,
  newPrice: item.price * 0.9
}));

console.log("Precios con descuento:", discounted);


// ===============================
// RESUMEN FINAL
// ===============================

console.log("\n--- Resumen ---\n");

// Cuenta cuántos cursos están activos
const activeCount = getActiveItems().length;

// Muestra estadísticas finales
console.log(`Total: ${items.length}`);
console.log(`Activos: ${activeCount}`);
console.log(`Inactivos: ${items.length - activeCount}`);


// Cierre del reporte
console.log(`\n${"=".repeat(50)}`);
console.log("Reporte completado");
console.log(`${"=".repeat(50)}\n`);