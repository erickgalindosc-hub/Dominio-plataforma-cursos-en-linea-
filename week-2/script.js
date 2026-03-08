// ============================================
// PROYECTO SEMANA 02: Ficha de Datos del Dominio
// Dominio: Plataforma de Cursos en Línea
// ============================================

// ============================================
// SECCIÓN 1: DATOS PRINCIPALES
// ============================================

// Nombre del dominio
const DOMAIN_NAME = "Plataforma de Cursos en Línea";

// Nombre del curso dentro de la plataforma
const itemName = "JavaScript para Principiantes";

// Categoría del curso
const itemCategory = "Programación Web";

// Cantidad de estudiantes inscritos
const itemQuantity = 120;

// Indica si el curso está disponible
const isItemAvailable = true;

// Instructor aún no asignado
const instructorPending = null;


// ============================================
// SECCIÓN 2: MOSTRAR FICHA DE DATOS
// ============================================
console.log("===========================");
console.log(`FICHA DE DATOS: ${DOMAIN_NAME}`);
console.log("===========================");
console.log("");

// Mostrar datos del curso
console.log(`Curso:        ${itemName}`);
console.log(`Categoría:    ${itemCategory}`);
console.log(`Estudiantes:  ${itemQuantity}`);
console.log(`Disponible:   ${isItemAvailable}`);
console.log("");


// ============================================
// SECCIÓN 3: VERIFICACIÓN DE TIPOS CON typeof
// ============================================
console.log("--- Tipos de datos ---");

console.log("typeof itemName:        ", typeof itemName);
console.log("typeof itemQuantity:    ", typeof itemQuantity);
console.log("typeof isItemAvailable: ", typeof isItemAvailable);

console.log("");


// ============================================
// SECCIÓN 4: CONVERSIONES EXPLÍCITAS
// ============================================
console.log("--- Conversiones ---");

// Convertir número a texto
const studentsAsText = String(itemQuantity);

console.log("Estudiantes como texto:", studentsAsText);
console.log("typeof (convertido):", typeof studentsAsText);

console.log("");


// ============================================
// SECCIÓN 5: VALOR NULL
// ============================================
console.log("--- Valor nulo ---");

console.log("Instructor pendiente:", instructorPending);
console.log("typeof null:", typeof instructorPending);
console.log("¿Es null?:", instructorPending === null);

console.log("");


// ============================================
// CIERRE
// ============================================
console.log("===========================");
console.log("FIN DE FICHA");
console.log("===========================");