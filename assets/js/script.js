// Statement:
// =========
// Ingresar 1 numero y obtener las tablas de multiplicar desde el 1 hasta el numero ingresado.
// Tambien se debe mostrar el factorial para los mismos numeros.
// Mostrar resultado en consola del navegador.

// Requirements:
// ============
// 1. Crear una funcion para solicitar el numero y validarlo antes de mostrar que el numero ingresado se encuentre entre 1 y 20.
//    En caso que no corresponda al rango, mostrar un mensaje al usuario: "Numero fuera del rango".
// 2. Usar let y arrow functions.
// 3. Generar y mostrar por consola el resultado de las operaciones.
// 4. Aplicar un ciclo for anidado para obtener el factorial del numero ingresado.

// Solicitamos el ingreso de un numero al usuario, y repetimos hasta que ingrese un valor valido.
do {
  var number = Number(
    prompt("Ingrese un numero entre 1 y 20 para realizar los calculos:", 1)
  );
} while (validar() == false);

// Creamos un funcion para validar el numero ingresado por el usuario.
function validar() {
  if (number < 1) {
    alert("Numero ingresado es menor a 1, intente nuevamente.");
    return false;
  } else if (number > 20) {
    alert("Numero ingresado es mayor a 20, intente nuevamente.");
    return false;
  } else if (isNaN(number)) {
    alert("No ingresaste un numero, intenta nuevamente.");
    return false;
  }
}

// Realizamos las tablas de multiplicar.
for (let i = 1; i <= number; i++) {
  let resultadoMultiplicacion = i * number;
  console.log(`${i} * ${number} = ${resultadoMultiplicacion}`);
}

// function para calcular el factorial.
function factorialNumero(number) {
  //   if (validar() == true)
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result = result * i;
  }
  return result;
}

// Realizamos calculo del factorial del numero ingresado.
for (let i = 1; i <= number; i++) {
  let resultado = factorialNumero(i);
  console.log(`El factorial de ${i}! es: ${resultado}`);
}
