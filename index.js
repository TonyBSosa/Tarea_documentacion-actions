function suma(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}

function multiplicacion(a, b) {
  return a * b;
}

function division(a, b) {
  if (b === 0) {
    throw new Error("No se puede dividir por cero");
  }
  return a / b;
}

// ✅ NUEVA FUNCIÓN PARA EL EJERCICIO 1
function potencia(base, exponente) {
  return Math.pow(base, exponente);
}

// Solo para ver algo en consola cuando corras `node index.js`
console.log("Aplicación iniciada");
console.log("➕ Suma(5, 3):", suma(5, 3));
console.log("➖ Resta(10, 4):", resta(10, 4));
console.log("✖ Multiplicación(6, 7):", multiplicacion(6, 7));
console.log("➗ División(20, 4):", division(20, 4));
console.log("⚡ Potencia(2, 3):", potencia(2, 3));

// Exportamos para que test.js pueda usar las funciones
module.exports = {
  suma,
  resta,
  multiplicacion,
  division,
  potencia,
};
