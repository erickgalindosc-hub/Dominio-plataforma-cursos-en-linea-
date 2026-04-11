// ============================================
// CONFIGURACIÓN DEL DOMINIO
// ============================================

const DOMAIN_NAME = "Plataformas de Cursos en Línea";
const VALUE_LABEL = "plataformas";

// ============================================
// DATOS DEL CATÁLOGO
// ============================================

const items = [
  { id: 1, name: "Udemy", price: 50, active: true, students: 1000, certificate: true },
  { id: 2, name: "Coursera", price: 70, active: true, students: 800, university: "Stanford" },
  { id: 3, name: "Platzi", price: 60, active: true, students: 1200 },
  { id: 4, name: "edX", price: 40, active: false, students: 500, university: "MIT" },
  { id: 5, name: "Domestika", price: 30, active: true, students: 300 },
  { id: 6, name: "Crehana", price: 35, active: false, students: 450, certificate: true }
];

// ============================================
// INSPECCIÓN CON Object.*
// ============================================

const inspectItem = (item) => {
  console.log(`\n📋 Detalle de: ${item.name}`);
  Object.entries(item).forEach(([key, value]) => {
    console.log(`${key.padEnd(12)}: ${value}`);
  });
};

const calculateStats = (numericKey) => {
  const values = items.map(item => item[numericKey]);
  
  const total = values.reduce((acc, val) => acc + val, 0);
  const avg = total / values.length;
  const max = Math.max(...values);
  const min = Math.min(...values);

  console.log(`\n📊 Estadísticas de ${numericKey}:`);
  console.log("Total:", total);
  console.log("Promedio:", avg);
  console.log("Máximo:", max);
  console.log("Mínimo:", min);
};

// ============================================
// VERIFICACIÓN CON Object.hasOwn()
// ============================================

const showWithOptionals = (item) => {
  console.log(`\n→ ${item.name}`);
  console.log("Precio:", item.price);
  console.log("Activo:", item.active);

  if (Object.hasOwn(item, "certificate")) {
    console.log("Certificado:", item.certificate);
  }

  if (Object.hasOwn(item, "university")) {
    console.log("Universidad:", item.university);
  }
};

// ============================================
// ITERACIÓN CON for...in
// ============================================

const printAllProperties = (item) => {
  console.log(`\n🔍 Propiedades de "${item.name}":`);
  
  for (let key in item) {
    if (Object.hasOwn(item, key)) {
      console.log(`${key}: ${item[key]}`);
    }
  }
};

// ============================================
// SPREAD OPERATOR
// ============================================

const updateItem = (item, changes) => {
  return { ...item, ...changes };
};

// ============================================
// OPERACIONES CON EL ARRAY
// ============================================

const getAvailable = () => {
  return items.filter(item => item.active);
};

const findById = (id) => {
  return items.find(item => item.id === id);
};

const addCalculatedProp = () => {
  return items.map(item => ({
    ...item,
    priceWithTax: item.price * 1.19
  }));
};

const sortByNumericProp = (ascending = true) => {
  return [...items].sort((a, b) => {
    return ascending ? a.price - b.price : b.price - a.price;
  });
};

// ============================================
// REPORTE FINAL
// ============================================

const buildReport = () => {
  console.log("\n" + "=".repeat(50));
  console.log(`📦 CATÁLOGO: ${DOMAIN_NAME.toUpperCase()}`);
  console.log("=".repeat(50));

  console.log("Total plataformas:", items.length);

  const disponibles = getAvailable().length;
  console.log("Activas:", disponibles);

  calculateStats("price");

  console.log("\n📋 Plataformas ordenadas por precio:");
  const sorted = sortByNumericProp();
  sorted.forEach(item => {
    console.log(`${item.name} - $${item.price}`);
  });

  const max = sortByNumericProp(false)[0];
  const min = sortByNumericProp(true)[0];

  console.log("\n💰 Más cara:", max.name);
  console.log("💸 Más barata:", min.name);

  console.log("=".repeat(50));
};

// ============================================
// EJECUCIÓN PRINCIPAL
// ============================================

console.log(`\n🚀 Iniciando catálogo: ${DOMAIN_NAME}`);
console.log(`   Total de ${VALUE_LABEL}: ${items.length}`);

inspectItem(items[0]);
calculateStats("price");
items.forEach(showWithOptionals);
printAllProperties(items[0]);

// ejemplo update
const updated = updateItem(items[0], { price: 55 });
console.log("\n✏️ Actualización:", updated);

// disponibles
console.log("\n✅ Activas:", getAvailable());

// find
console.log("\n🔎 Buscar id 2:", findById(2));
console.log("🔎 Buscar id 99:", findById(99));

// map
console.log("\n➕ Con impuesto:", addCalculatedProp());

// sort
console.log("\n📊 Ordenadas:", sortByNumericProp());

// reporte final
buildReport();
