// ============================================
// Proyecto Semana 03
// Dominio: Plataforma de cursos online
// ============================================

// La idea de este script es simular cuánto dinero genera
// una plataforma dependiendo de los cursos vendidos

// ============================================
// SECCIÓN 1: Datos base
// ============================================

// precios de cursos (en pesos)
const basicPrice = 80_000;
const premiumPrice = 150_000;

// cantidad de estudiantes inscritos
let basicStudents = 35;
let premiumStudents = 20;

// cosas de negocio
const discount = 0.10; // promo del 10%
const platformFee = 0.15; // lo que se queda la plataforma

// ============================================
// SECCIÓN 2: Cálculos normales
// ============================================
console.log(" Operaciones básicas ");

// cuánto se gana por cursos básicos
const basicTotal = basicPrice * basicStudents;
console.log("Plata de cursos básicos:", basicTotal);

// cursos premium
const premiumTotal = premiumPrice * premiumStudents;
console.log("Plata de cursos premium:", premiumTotal);

// todo junto
const total = basicTotal + premiumTotal;
console.log("Total generado:", total);

// promedio por estudiante (para ver rendimiento)
const students = basicStudents + premiumStudents;
const avgPerStudent = total / students;
console.log("Promedio por estudiante:", avgPerStudent);

console.log("");

// ============================================
// SECCIÓN 3: Ajustes (simulando vida real)
// ============================================
console.log("=== Asignación compuesta ===");

let finalMoney = total;
console.log("Antes de descuentos:", finalMoney);

// aplicamos promo
finalMoney -= finalMoney * discount;
console.log("Después del descuento:", finalMoney);

// ahora la plataforma cobra su parte
finalMoney -= finalMoney * platformFee;
console.log("Después de comisión:", finalMoney);

console.log("");

// ============================================
// SECCIÓN 4: Validaciones
// ============================================
console.log(" Validaciones con ");

// esperaba cierto número de estudiantes
const expected = 55;
const exactMatch = students === expected;
console.log("¿Se cumplió lo esperado?", exactMatch);

// ver si se ganó buena plata
const goodMoney = total > 5_000_000;
console.log("¿Fue buen ingreso?", goodMoney);

console.log("");

// ============================================
// SECCIÓN 5: Lógica
// ============================================
console.log(" Condiciones lógicas ");

// si hay muchos premium y buena plata → bonus
const manyPremium = premiumStudents > 15;
const bonus = manyPremium && goodMoney;
console.log("¿Hay bono?", bonus);

// si algún curso está flojo
const lowCourse = basicStudents < 10 || premiumStudents < 10;
console.log("¿Algún curso flojo?", lowCourse);

// validación inversa
const notEnough = !(students >= 30);
console.log("¿Muy pocos estudiantes?", notEnough);

console.log("");

// ============================================
// SECCIÓN 6: Resumen
// ============================================
console.log(" Resumen");

console.log("Estudiantes totales:", students);
console.log("Ingreso bruto:", total);
console.log("Ingreso final:", finalMoney);
console.log("Promedio por estudiante:", avgPerStudent);
