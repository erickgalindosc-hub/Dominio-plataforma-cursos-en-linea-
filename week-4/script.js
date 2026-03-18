// ============================================
// PROYECTO SEMANA 04
// Dominio: Plataforma de cursos online
// ============================================

// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================

// nombre de la plataforma
const DOMAIN_NAME = "Plataforma de Cursos Online";

// nombre del curso (con espacios para usar trim)
const rawEntityName = "  Curso de JavaScript Moderno  ";

// categoría
const entityCategory = "Programación — nivel intermedio";

// código del curso
const entityCode = "CRS-101";

// descripción
const entityDescription = "Curso práctico de JavaScript moderno enfocado en desarrollo web real.";

// valor (precio)
const mainValue = 120_000;

// estado
const isActive = true;


// ============================================
// SECCIÓN 2: Transformaciones
// ============================================

// limpiar nombre
const entityName = rawEntityName.trim();

// en mayúsculas
const entityNameUpper = entityName.toUpperCase();

// en minúsculas
const entityNameLower = entityName.toLowerCase();

// prefijo del código
const codePrefix = entityCode.slice(0, 3);


// ============================================
// SECCIÓN 3: Validaciones
// ============================================

// validaciones típicas
const hasValidPrefix = entityCode.startsWith("CRS");
const descriptionHasJS = entityDescription.includes("JavaScript");
const hasValidSuffix = entityCode.endsWith("101");


// ============================================
// SECCIÓN 4: Ficha principal
// ============================================

const separator = "=".repeat(50);
const subSeparator = "-".repeat(50);

const mainCard = `
${separator}
  ${DOMAIN_NAME.toUpperCase()} — FICHA DE CURSO
${separator}
Curso:       ${entityNameUpper}
Categoría:   ${entityCategory}
Código:      ${entityCode}
Prefijo:     ${codePrefix}
Precio:      $${mainValue}
Estado:      ${isActive ? "Disponible" : "No disponible"}

${subSeparator}
Descripción:
${entityDescription}
${separator}
`;

console.log(mainCard);


// ============================================
// SECCIÓN 5: Validaciones
// ============================================

console.log("--- Validaciones ---");

console.log(`¿Código empieza con '${codePrefix}'?: ${hasValidPrefix}`);
console.log(`¿Descripción contiene 'JavaScript'?: ${descriptionHasJS}`);
console.log(`¿Código termina en '101'?: ${hasValidSuffix}`);

console.log("");


// ============================================
// SECCIÓN 6: Notificación
// ============================================

console.log("--- Notificación ---");

const notification = `📢 Nuevo curso disponible: ${entityName} (${entityCode})`;

console.log(notification);
console.log("");