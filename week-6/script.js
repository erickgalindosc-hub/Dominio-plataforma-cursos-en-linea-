
// SECCIÓN 1: Datos del dominio


const items = [
  { name: "JavaScript desde Cero", category: "programación", value: 40 },
  { name: "Diseño UX/UI", category: "diseño", value: 25 },
  { name: "Python Avanzado", category: "programación", value: 60 },
  { name: "Marketing Digital", category: "marketing", value: 30 },
  { name: "React Completo", category: "programación", value: 50 },
  { name: "Photoshop Básico", category: "diseño", value: 20 }
];

// Estas son las categorías que voy a manejar
const categories = ["programación", "diseño", "marketing"];

// En este caso el valor representa la duración del curso en horas
const valueLabel = "horas";



// SECCIÓN 2: Listado completo con for...of


console.log("=== LISTADO COMPLETO ===");

// Uso un contador para numerar los cursos
let lineNumber = 0;

for (const item of items) {
  lineNumber++;

  console.log(
    `${lineNumber}. ${item.name} - ${item.category} - ${item.value} ${valueLabel}`
  );
}

console.log("");



// SECCIÓN 3: Conteo por categoría


console.log("=== CONTEO POR CATEGORÍA ===");

// Recorro cada categoría
for (const category of categories) {
  let count = 0;

  // Aquí cuento cuántos cursos hay por categoría
  for (const item of items) {
    if (item.category === category) {
      count++;
    }
  }

  console.log(`${category}: ${count} curso(s)`);
}

console.log("");



// SECCIÓN 4: Totales y promedio


console.log("=== ESTADÍSTICAS ===");

let totalValue = 0;

// Sumo todas las horas de los cursos
for (const item of items) {
  totalValue += item.value;
}

// Calculo el promedio
const averageValue =
  items.length > 0 ? totalValue / items.length : 0;

console.log(`Total de ${valueLabel}: ${totalValue}`);
console.log(`Promedio de ${valueLabel}: ${averageValue.toFixed(1)}`);

console.log("");



// SECCIÓN 5: Máximo y mínimo


console.log("=== MÁXIMO Y MÍNIMO ===");

// Tomo el primer elemento como referencia inicial
let maxItem = items[0] ?? null;
let minItem = items[0] ?? null;

if (items.length > 0) {
  for (const item of items) {
    // Comparo para encontrar el curso con más horas
    if (item.value > maxItem.value) {
      maxItem = item;
    }

    // Comparo para encontrar el curso con menos horas
    if (item.value < minItem.value) {
      minItem = item;
    }
  }

  console.log(`Curso más largo: ${maxItem.name} (${maxItem.value} horas)`);
  console.log(`Curso más corto: ${minItem.name} (${minItem.value} horas)`);
}

console.log("");



// SECCIÓN 6: Reporte detallado


console.log("=== REPORTE DETALLADO ===");

// Uso un for clásico para recorrer el array
for (let i = 0; i < items.length; i++) {
  const item = items[i];

  // Determino si está por encima o por debajo del promedio
  const comparison =
    item.value >= averageValue
      ? "por encima del promedio"
      : "por debajo del promedio";

  console.log(
    `${i + 1}. ${item.name} tiene ${item.value} ${valueLabel} y está ${comparison}`
  );
}

console.log("");
console.log("=== FIN DEL REPORTE ===");