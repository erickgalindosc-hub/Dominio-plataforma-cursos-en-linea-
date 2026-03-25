
// Aquí definimos la información principal del curso
const elementName = "Curso de JavaScript";
const elementStatus = "active"; // puede ser "active" o "inactive"
const elementValue = 85; // nivel de popularidad (0 - 100)
const elementType = "programming"; // categoría del curso

// Información adicional (puede o no existir)
const elementInfo = {
  detail: "Más de 1000 estudiantes inscritos",
  instructor: "Ana Gómez"
};


// SECCIÓN 2: Clasificación del curso


// Clasificamos el curso según su popularidad
let classification;

if (elementValue >= 80) {
  classification = "Muy popular";
} else if (elementValue >= 50) {
  classification = "Popularidad media";
} 
else {
  classification = "Poco popular";
}


// SECCIÓN 3: Estado del curso (ternario)


// Si está activo se muestra como disponible
const statusLabel =
  elementStatus === "active" ? "Disponible" : "No disponible";


// SECCIÓN 4: Tipo de curso (switch)


let typeLabel;

switch (elementType) {
  case "programming":
    typeLabel = "Curso de Programación";
    break;
  case "design":
    typeLabel = "Curso de Diseño";
    break;
  case "marketing":
    typeLabel = "Curso de Marketing";
    break;
  default:
    typeLabel = "Categoría desconocida";
}


// SECCIÓN 5: Valores por defecto (??)


// En caso de que falte información
const displayName = elementName ?? "Sin nombre";
const infoDetail =
  elementInfo?.detail ?? "No hay información adicional";


// SECCIÓN 6: Acceso seguro (?.)

// Accedemos al instructor sin que rompa el código si no existe
const safeProperty =
  elementInfo?.instructor ?? "Instructor no especificado";

// SECCIÓN 7: Resultado final

console.log("=".repeat(40));
console.log("FICHA DEL CURSO");
console.log("=".repeat(40));

console.log(`Curso: ${displayName}`);
console.log(`Estado: ${statusLabel}`);
console.log(`Nivel: ${classification}`);
console.log(`Categoría: ${typeLabel}`);
console.log(`Descripción: ${infoDetail}`);
console.log(`Instructor: ${safeProperty}`);

console.log("=".repeat(40));