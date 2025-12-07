const { suma, resta, multiplicacion, division, potencia } = require('./index.js');

function test() {
  let passed = 0;
  let failed = 0;
  const tests = [];

  // Test 1: Suma básica
  try {
    if (suma(2, 3) === 5) {
      console.log("✅ Test 1 pasó: suma(2, 3) = 5");
      passed++;
      tests.push({ name: "Suma básica", status: "✅" });
    } else {
      console.log("❌ Test 1 falló: suma(2, 3) debería ser 5");
      failed++;
      tests.push({ name: "Suma básica", status: "❌" });
    }
  } catch (e) {
    console.log("❌ Test 1 error:", e.message);
    failed++;
    tests.push({ name: "Suma básica", status: "❌" });
  }

  // Test 2: Resta básica
  try {
    if (resta(10, 4) === 6) {
      console.log("✅ Test 2 pasó: resta(10, 4) = 6");
      passed++;
      tests.push({ name: "Resta básica", status: "✅" });
    } else {
      console.log("❌ Test 2 falló: resta(10, 4) debería ser 6");
      failed++;
      tests.push({ name: "Resta básica", status: "❌" });
    }
  } catch (e) {
    console.log("❌ Test 2 error:", e.message);
    failed++;
    tests.push({ name: "Resta básica", status: "❌" });
  }

  // Test 3: Suma con negativos
  try {
    if (suma(-5, 3) === -2) {
      console.log("✅ Test 3 pasó: suma(-5, 3) = -2");
      passed++;
      tests.push({ name: "Suma con negativos", status: "✅" });
    } else {
      console.log("❌ Test 3 falló: suma(-5, 3) debería ser -2");
      failed++;
      tests.push({ name: "Suma con negativos", status: "❌" });
    }
  } catch (e) {
    console.log("❌ Test 3 error:", e.message);
    failed++;
    tests.push({ name: "Suma con negativos", status: "❌" });
  }

  // Test 4: Multiplicación
  try {
    if (multiplicacion(6, 7) === 42) {
      console.log("✅ Test 4 pasó: multiplicacion(6, 7) = 42");
      passed++;
      tests.push({ name: "Multiplicación", status: "✅" });
    } else {
      console.log("❌ Test 4 falló: multiplicacion(6, 7) debería ser 42");
      failed++;
      tests.push({ name: "Multiplicación", status: "❌" });
    }
  } catch (e) {
    console.log("❌ Test 4 error:", e.message);
    failed++;
    tests.push({ name: "Multiplicación", status: "❌" });
  }

  // Test 5: División
  try {
    if (division(20, 4) === 5) {
      console.log("✅ Test 5 pasó: division(20, 4) = 5");
      passed++;
      tests.push({ name: "División", status: "✅" });
    } else {
      console.log("❌ Test 5 falló: division(20, 4) debería ser 5");
      failed++;
      tests.push({ name: "División", status: "❌" });
    }
  } catch (e) {
    console.log("❌ Test 5 error:", e.message);
    failed++;
    tests.push({ name: "División", status: "❌" });
  }

  // Test 6: División por cero
  try {
    division(10, 0);
    console.log("❌ Test 6 falló: división por cero debería lanzar error");
    failed++;
    tests.push({ name: "División por cero", status: "❌" });
  } catch (e) {
    if (e.message.includes("No se puede dividir por cero")) {
      console.log("✅ Test 6 pasó: división por cero lanza error correctamente");
      passed++;
      tests.push({ name: "División por cero", status: "✅" });
    } else {
      console.log("❌ Test 6 falló: error incorrecto");
      failed++;
      tests.push({ name: "División por cero", status: "❌" });
    }
  }

  // Test 7: Potencia básica
  try {
    if (potencia(2, 3) === 8) {
      console.log("✅ Test 7 pasó: potencia(2, 3) = 8");
      passed++;
      tests.push({ name: "Potencia básica", status: "✅" });
    } else {
      console.log("❌ Test 7 falló: potencia(2, 3) debería ser 8");
      failed++;
      tests.push({ name: "Potencia básica", status: "❌" });
    }
  } catch (e) {
    console.log("❌ Test 7 error:", e.message);
    failed++;
    tests.push({ name: "Potencia básica", status: "❌" });
  }

  // Test 8: Potencia con exponente 0
  try {
    if (potencia(5, 0) === 1) {
      console.log("✅ Test 8 pasó: potencia(5, 0) = 1");
      passed++;
      tests.push({ name: "Potencia exponente cero", status: "✅" });
    } else {
      console.log("❌ Test 8 falló: potencia(5, 0) debería ser 1");
      failed++;
      tests.push({ name: "Potencia exponente cero", status: "❌" });
    }
  } catch (e) {
    console.log("❌ Test 8 error:", e.message);
    failed++;
    tests.push({ name: "Potencia exponente cero", status: "❌" });
  }

  console.log("\n" + "=".repeat(50));
  console.log(" RESUMEN DE TESTS");
  console.log("=".repeat(50));
  tests.forEach((test, index) => {
    console.log(`${test.status} Test ${index + 1}: ${test.name}`);
  });
  console.log("=".repeat(50));
  console.log(`✅ Tests pasados: ${passed}`);
  console.log(`❌ Tests fallados: ${failed}`);
  console.log(` Porcentaje de éxito: ${((passed / (passed + failed)) * 100).toFixed(2)}%`);
  console.log("=".repeat(50));

  if (failed > 0) {
    console.error("\n❌ Tests fallaron.\nCódigo de salida: 1");
    process.exit(1);
  } else {
    console.log("\n✅ Todos los tests pasaron exitosamente!");
    process.exit(0);
  }
}

test();
