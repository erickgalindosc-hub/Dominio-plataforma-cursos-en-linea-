// ============================================
// PROYECTO INTEGRADOR — PLATAFORMAS DE CURSOS
// ============================================

// ============================================
// SECCIÓN 1: Configuración y Constantes
// ============================================

const DOMAIN_NAME = "PLATAFORMAS_CURSOS";
const VALUE_LABEL = "plataformas";
const MAX_ITEMS = 1_000;

// ============================================
// SECCIÓN 2: Datos — Array Principal
// ============================================

const items = [
  { id: 1, name: "Udemy", price: 50, students: 1000, active: true, category: "programacion", certificate: true },
  { id: 2, name: "Coursera", price: 70, students: 800, active: true, category: "universitario", university: "Stanford" },
  { id: 3, name: "Platzi", price: 60, students: 1200, active: true, category: "tecnologia" },
  { id: 4, name: "edX", price: 40, students: 500, active: false, category: "universitario", university: "MIT" },
  { id: 5, name: "Domestika", price: 30, students: 300, active: true, category: "creativo" },
  { id: 6, name: "Crehana", price: 35, students: 450, active: false, category: "creativo", certificate: true }
];

// ============================================
// SECCIÓN 3: Funciones CRUD
// ============================================

const addItem = (item) => {
  if (items.length >= MAX_ITEMS) {
    console.log("No se pueden agregar más plataformas.");
    return;
  }

  items.push(item);
  console.log(`Plataforma agregada: ${item.name}`);
};

const findById = (id) => {
  return items.find(item => item.id === id);
};

const getActive = () => {
  return items.filter(item => item.active);
};

const filterByField = (field, value) => {
  return items.filter(item => item[field] === value);
};

// ============================================
// SECCIÓN 4: Funciones de Análisis
// ============================================

const updateItem = (id, changes) => {
  return items.map(item =>
    item.id === id ? { ...item, ...changes } : item
  );
};

const calculateStats = (field) => {
  const values = items.map(item => item[field]);

  const total = values.reduce((acc, val) => acc + val, 0);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const avg = total / values.length;

  return { min, max, avg, total };
};

// ============================================
// SECCIÓN 5: Funciones de Display
// ============================================

const formatItem = (item) => {
  const name = item.name.padEnd(12);
  const price = `$${item.price}`.padEnd(8);
  const status = item.active ? "Activo" : "Inactivo";

  const extra = item.university ?? (item.certificate ? "Certificado" : "N/A");

  return `[${item.id}] ${name} | ${price} | ${status} | ${extra}`;
};

const buildReport = () => {
  console.log("=".repeat(50));
  console.log(`CATÁLOGO: ${DOMAIN_NAME}`);
  console.log("=".repeat(50));

  // listado
  items.forEach(item => console.log(formatItem(item)));

  // estado
  const active = getActive();
  console.log("\nResumen:");
  console.log(`Activas: ${active.length}`);
  console.log(`Inactivas: ${items.length - active.length}`);

  // estadísticas
  const stats = calculateStats("price");
  console.log("\nEstadísticas de precios:");
  console.log(`Mínimo: ${stats.min}`);
  console.log(`Máximo: ${stats.max}`);
  console.log(`Promedio: ${stats.avg.toFixed(2)}`);
  console.log(`Total: ${stats.total}`);

  // detalle del primer elemento
  console.log("\nPropiedades del primer elemento:");
  Object.entries(items[0]).forEach(([key, value]) => {
    console.log(`${key.padEnd(12)}: ${value}`);
  });

  console.log("=".repeat(50));
};

// ============================================
// SECCIÓN 6: Ejecución Principal
// ============================================

console.log("=".repeat(40));
console.log(DOMAIN_NAME);
console.log("=".repeat(40));
console.log(`Total de ${VALUE_LABEL}: ${items.length} / ${MAX_ITEMS}\n`);

// búsqueda
const found = findById(1);
console.log("Buscar id=1:", found?.name ?? "No encontrado");

// activos
const active = getActive();
console.log(`\nActivos: ${active.length}`);
active.forEach(item => console.log(" ", formatItem(item)));

// filtro
const filtered = filterByField("category", "creativo");
console.log(`\nFiltro por categoría 'creativo': ${filtered.length}`);

// actualización
const updated = updateItem(1, { price: 55 });
console.log(`\nNuevo precio del id=1: ${updated.find(i => i.id === 1)?.price}`);

// estadísticas
const stats = calculateStats("price");
console.log(`\nPromedio de precios: ${stats.avg.toFixed(2)}`);

// agregar elemento
addItem({ id: 7, name: "Skillshare", price: 45, students: 600, active: true, category: "creativo" });

// reporte final
buildReport();