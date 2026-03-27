"use strict"; 
// Activa el modo estricto de JavaScript.
// Sirve para evitar errores comunes y hacer el código más seguro.

// ===============================
// Constantes y datos del dominio
// ===============================

const DOMAIN_NAME = "Plataforma de Cursos Online";
// Nombre del sistema o dominio que estamos trabajando.
// Se usa en el título del reporte.

const VALUE_LABEL = "precio";
// Etiqueta general para los valores numéricos.
// En este caso representa el precio de los cursos.


// Array de cursos (nuestros datos principales)
const items = [
  { id: 1, name: "JavaScript desde Cero", category: "programación", value: 50, active: true },
  { id: 2, name: "Diseño UX/UI", category: "diseño", value: 40, active: true },
  { id: 3, name: "Marketing Digital", category: "marketing", value: 30, active: false },
  { id: 4, name: "Python Avanzado", category: "programación", value: 60, active: true },
  { id: 5, name: "Excel para Negocios", category: "ofimática", value: 25, active: false }
];
// Este array simula una base de datos de cursos.
// Cada objeto representa un curso con:
// id → identificador
// name → nombre del curso
// category → categoría
// value → precio
// active → si está disponible o no


// Función de formato

// Arrow function que formatea un curso para mostrarlo bonito
const formatItem = (course) => {
  return `🎓 ${course.name} [${course.category}] — $${course.value}`;
};
// Recibe un curso y devuelve un texto listo para imprimir.
// Ejemplo:
// 🎓 JavaScript desde Cero [programación] — $50



// Función de cálculo (pura)


// Calcula el precio final con descuento
const calculateValue = (price, discount = 0) => {
  return +(price * (1 - discount / 100)).toFixed(2);
};
// Es una función pura porque:
// mismo precio + mismo descuento → siempre mismo resultado
// También usa un parámetro por defecto (discount = 0)



// Función de validación


// Verifica si el curso está activo
const isValid = (course) => {
  return course.active === true;
};
// Devuelve:
// true → curso disponible
// false → curso no disponible



// Función con parámetro por defecto


const formatWithDefault = (value, label = VALUE_LABEL, currency = "COP") => {
  return `${label}: ${currency} ${value}`;
};
// Sirve para mostrar valores con formato.
// Usa valores por defecto:
// label = "precio"
// currency = "COP"



// Reporte (parte principal)


// Imprime un encabezado bonito
console.log(`\n${"═".repeat(45)}`);
console.log(`   REPORTE — ${DOMAIN_NAME}`);
console.log(`${"═".repeat(45)}`);


// Si no hay cursos, muestra advertencia
if (items.length === 0) {
  console.log("\n No hay cursos disponibles.");
} else {

  
  // Listado de cursos
  

  console.log("\n📋 Cursos:");
  let lineNumber = 1;

  for (const course of items) {
    // Usa la función formatItem para mostrar cada curso
    console.log(`  ${lineNumber}. ${formatItem(course)}`);
    lineNumber++;
  }



  // Conteo de cursos activos


  let validCount = 0;

  for (const course of items) {
    // Usa isValid para verificar si está activo
    if (isValid(course)) {
      validCount++;
    }
  }

  console.log(`\n Cursos activos: ${validCount} / ${items.length}`);



  // Cálculo del total de ingresos
 

  let totalValue = 0;

  for (const course of items) {
    // Suma el precio de cada curso
    totalValue += calculateValue(course.value);
  }

  // Muestra el total usando la función con formato
  console.log(formatWithDefault(totalValue, "Total ingresos"));
}


// Cierre del reporte
console.log(`\n${"═".repeat(45)}\n`);