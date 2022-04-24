// Haz un bucle que muestre por consola los números del 4 al 9 inclusive. Utilizad el bucle for.

const n = 9;

for (let i = 4; i <= n; i++) {
  console.log(i);
}

// Haz un bucle que muestre por consola los impares del 3 al 17 inclusive. Utilizad el bucle for.

//if (num1 % 2 != 0) {
//   num1++;

var myArray = [];
for (var i = 3; i < 18; i += 2) {
  myArray.push(i);
}
console.log(myArray); // console output [ 3, 5, 7, 9 ]

// Utiliza la siguiente array para resolver los próximos ejercicios:
// Crea un array con la gente mayor de 25 años y muéstralo por consola. Sin utilizar el método filter de los arrays. Utilizad el bucle for of.

let gente = [
  {
    nombre: "Jamiro",
    edad: 45,
  },
  {
    nombre: "Juan",
    edad: 35,
  },
  {
    nombre: "Paco",
    edad: 34,
  },
  {
    nombre: "Pepe",
    edad: 14,
  },
  {
    nombre: "Pilar",
    edad: 24,
  },
  {
    nombre: "Laura",
    edad: 24,
  },
  {
    nombre: "Jenny",
    edad: 10,
  },
];

var youngPeople = [];
for (let { nombre, edad } of gente) {
  if (edad >= 25) {
    youngPeople.push({ nombre, edad });
  }
}
console.log(youngPeople);

let peopleOver25 = [];
for (let person of gente) {
  if (person.edad >= 25) {
    peopleOver25.push(person);
  }
}
console.log(peopleOver25);

// Crea un array con la gente que empieza por J. Sin utilizar el método filter de los arrays. Utilizad el bucle for of y muéstralo por consola.

let namesStartingWithJ = [];
for (let person of gente) {
  if (person.nombre.startsWith("J")) {
    namesStartingWithJ.push(person);
  }
}
console.log(namesStartingWithJ);
// Crea un array con la gente que su nombre tiene 4 letras. Sin utilizar el método filter de los arrays y muéstralo por consola.

let namesWith4Letters = [];
for (let person of gente) {
  if (person.nombre.length == 4) {
    namesWith4Letters.push(person);
  }
}
console.log(namesWith4Letters);

// Crea un array con la gente que su nombre empieza por J y sean menores de 40 años. Sin utilizar el método filter de los arrays y muéstralo por consola.

let startingWithJAndYoung = [];

for (let person of gente) {
  if (person.nombre.startsWith("J") && person.edad < 40) {
    startingWithJAndYoung.push(person);
  }
}
console.log(startingWithJAndYoung);

// Crea un objeto en la variable ordenador de tal modo que el siguiente código no muestre por consola 'suspendes'

let ordenador = {
  marca: "La pava",
  tipo: "portátil",
  perifericos: [1, "touchPad"],
  almacenamiento: {
    discos: [3, "HDD"],
    maestro: 0,
  },
};
// TEST 1
if (typeof ordenador === "object") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 2
if (ordenador.marca === "La pava") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 3
if (ordenador.tipo === "portátil") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 4
if (ordenador.perifericos[1] === "touchPad") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 5
if (ordenador["almacenamiento"]["discos"][1] === "HDD") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 6
if (ordenador.almacenamiento.maestro === 0) {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

// Crea un objeto en la variable llamada obj de tal modo que el siguiente código no muestre por consola 'suspendes'

let obj = {
  a: {
    b: true,
    c: [1, 2],
  },
  d: 5,
  f: "hell",
};

// TEST 1
if (typeof obj === "object") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

// TEST 2
if (typeof obj.a.b === "boolean") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

// TEST 3
if (typeof obj.a.c[1] === "number") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 4
if (typeof obj.d === "number") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 5
if (obj.d > 4 && obj.d < 8) {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 6
if (typeof obj.f === "string") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 7
if (obj.f.length === 4) {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

// Crea un array en la variable llamada arr de tal modo que el siguiente código no muestre por consola 'suspendes'
let arr = [
  { name: "pepito", age: 25 },
  { name: "pepito", age: 45 },
  { name: "J", age: 30 },
];

// TEST 1
if (typeof arr === "object" && arr.length >= 0) {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 2
if (typeof arr[0] === "object") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 3
if (typeof arr[1] === "object") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 4
if (typeof arr[2] === "object") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 5
if (arr.length === 3) {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 6
if (arr[0].name === arr[1].name) {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

// TEST 6
if (arr[1].name === "pepito") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

// TEST 7
if (arr[1].age > arr[2].age) {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 8
if (arr[0].age === 25) {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 9
if (typeof arr[2].name === "string") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

// TEST 10
if (arr[2].name[0] === "J") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

// Crea la función convierteString debe recibir un tipo number y devolver el número como string .
// Si la func ión no recibe un dato tipo number debe devolver el string 'Debo ser ejecutada con un número'

function convierteString(num) {
  // when num = 7, typeof(num) = "number"
  // when num = "hello", typeof(num) = "string"
  // if (7 != "number")
  if (typeof num != "number") {
    alert("Debo ser ejecutada con un número");
  } else {
    return num.toString();
  }
}
// round brackets after a function name means the function is called
console.log(convierteString(7));
console.log(convierteString("Hello"));

// Crea la función caracterInicial  debe recibir un tipo string y devolver un string con el primer carácter.  Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'. Si recibe un string vacío debe devolver 'Debo ser ejecutada con un string no vacío'

function caracterInicial(string) {
  if (typeof string != "string") {
    alert("Debo ser ejecutada con un string");
  } else {
    return string.charAt(0);
  }
}
console.log(caracterInicial("hello"));
console.log(caracterInicial(1));

// Crea la función ultimoCaracter debe recibir un tipo string y devolver un string con el último carácter. Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'.Si recibe un string vacío debe devolver 'Debo ser ejecutada con un string no vacío'
function ultimoCaracter(string) {
  if (typeof string != "string") {
    alert("Debo ser ejecutada con un string");
  } else {
    return string.slice(string.length - 1);
  }
}
console.log(ultimoCaracter("hello"));
console.log(ultimoCaracter(1));

// Crea la función cuentaCaracteres debe recibir un tipo string y devolver un number con el número de carácteres Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'

function cuentaCaracteres(string) {
  if (typeof string != "string") {
    alert("Debo ser ejecutada con un string");
  } else {
    return string.length;
  }
}
console.log(cuentaCaracteres("Hello"));
console.log(cuentaCaracteres(1));

// Crea la función getCiudadesOrdenada. La función recibirá una cadena de texto de ciudades separadas por comas y devolverá un array de ciudades ordenadas alfabéticamente si la función no recibe una cadena de texto o recibe una cadena de texto sin comas debe devolver 'no es un formato correcto'
function getCiudadesOrdenada(cities) {
  var isarray = Array.isArray(cities);
  var newArray = cities.split(",");
  if (newArray.length < 2) {
    alert("no es un formato correcto");
  } else {
    return newArray.sort();
  }
}
var mycitiesIwantToOrder = "Madrid, Boston, Valencia, Murcia, New York";

var orderedCities = [];
// calling a function that returns something
// this something is affected to whatever variable (in our case, orderedCities)
orderedCities = getCiudadesOrdenada(mycitiesIwantToOrder);
console.log(orderedCities);
console.log(getCiudadesOrdenada("Valletta, Buggiba, Mgar, Cirwekka"));
console.log(getCiudadesOrdenada("Hello my name is jeff"));
console.log(getCiudadesOrdenada("Paris, Madrid"));

//Un palíndromo es una palabra que se escribe igual del derecho que del revés por ejemplo orejero, rallar o somos.  Crea la función esPalindromo que recibirá una cadena de texto y deberá devolver si es un palíndromo o no. Si la función no recibe una cadena de texto o está vacía 'no es un formato correcto'

function esPalindromo(word) {
  let wordInLowerCase;
  if (typeof word != "string" || word.length == 0) {
    return "no es un formato correcto";
  } else {
    wordInLowerCase = word.toLowerCase();
  }
  var splitInput = wordInLowerCase.split("");
  var reversedInput = splitInput.reverse();
  var reversedInputAsString = reversedInput.join("");
  if (wordInLowerCase == reversedInputAsString) {
    return true;
  } else {
    return false;
  }
}

console.log(esPalindromo(1));
console.log(esPalindromo("anna"));
console.log(esPalindromo("alex"));
console.log(esPalindromo(""));

// Crea la función getPrecioMostrar para que devuelva una cadena de texto con formato precio con dos decimales. Para 2 debería devolver 2.00 €. Si la función no recibe un número debería devolver devolver 'no es un formato correcto'

function getPrecioMostrar(price) {
  if (typeof price != "number") {
    return "no es un formato correcto";
  } else {
    return `£ ${price} .00`;
  }
}
console.log(getPrecioMostrar(8));
console.log(getPrecioMostrar("Hello"));

// Crea la función division que acepte como argumento dos números y devuelva el resultado de su división

function division(a, b) {
  return a / b;
}

console.log(division(4, 2));
console.log(division(12, 3));
console.log(division(12, 0));

// Crea la función esPar que acepte como argumento un número y devuelva true si es par y false si es impar

function esPar(unNumero) {
  return unNumero % 2 == 0;
}

console.log(esPar(12));
console.log(esPar(7));

//Crear la función ordenarArray2 que acepta como argumento un array de números y devuelva un array ordenado de mayor a menor

function ordenarArray2(arrayOfNumeros) {
  return arrayOfNumeros.sort((a, b) => b - a);
}

console.log(ordenarArray2([7, 8, 3, 98, 34, 45, 67]));

// Crear la función obtenerImpares que acepta como argumento un array de números y devuelva un array con los elementos impares

function impares(arrayOfNumbers) {
  var newArray = [];
  for (var i = 0; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i] % 2 != 0) newArray.push(arrayOfNumbers[i]);
  }
  return newArray;
}

console.log(impares([8, 7, 13, 16, 14]));

// Crear la función sumarArray que acepte como argumento un array numérico y devuelva la suma de los números en el array Array: [1, 2, 3] resultado: 6

function sumarArray(aon) {
  var currentTotal = 0;
  for (var i = 0; i < aon.length; i++) {
    currentTotal += aon[i];
  }
  return currentTotal;
}
console.log(sumarArray([1, 2, 3]));

// Crear la función multiplicarArray que acepte como argumento un array numérico y devuelva la multiplicación de los números en el array Array: [2, 3, 4] resultado: 24

function multiplicarArray(numericArray) {
  var currentTotalmultiply = 1;
  for (var i = 0; i < numericArray.length; i++) {
    currentTotalmultiply *= numericArray[i];
  }
  return currentTotalmultiply;
}

console.log(multiplicarArray([3, 3, 9]));

// Crea una función que dada una array de números, devuelve una nueva array que tenga solo los números que son 5 o más. Ejemplo entrada [3, 6, 8, 2] salida [6, 8]

function fiveOrMore(anotherArray) {
  var ArrayBiggerThanFive = [];
  for (var i = 0; i < anotherArray.length; i++) {
    if (anotherArray[i] >= 5) {
      ArrayBiggerThanFive.push(anotherArray[i]);
    }
  }
  return ArrayBiggerThanFive;
}
console.log(fiveOrMore([1, 4, 7, 34, 87]));

// Crea una aplicación que nos pida un número por prompt y con un método se lo pasamos por parámetro para que nos indique si es o no un número primo, debe devolver true si es primo sino false.
// Un número primo es aquel que solo puede dividirse entre 1 y sí mismo. Por ejemplo: 25 no es primo, ya que 25 es divisible entre 5, sin embargo, 17 si es primo.

function isPrimeNum(trueOrFalse) {
  for (var i = 2; i < trueOrFalse; i++) {
    if (trueOrFalse % i === 0) return false;
  }
  return trueOrFalse > 1;
}
let getNumFromUser = prompt(
  "Give me a number and i'll tell you if its a a prime number",
  17
);

console.log(isPrimeNum(1));
console.log(isPrimeNum(2));
console.log(isPrimeNum(9));
console.log(isPrimeNum(11));
console.log(isPrimeNum(getNumFromUser));

// Crea una función checkPassword con una variable tipo String que contenga
// una contraseña cualquiera. Después se te pedirá que introduzcas la
//contraseña (usando prompt), con 3 intentos. Cuando aciertes ya no pedirá
// más la contraseña y mostrará un mensaje diciendo
//“Enhorabuena”(ej.un alert). Piensa bien en la condición de salida
// (3 intentos y si acierta sale, aunque le queden intentos).

function checkPassword(userPasswordAttempt) {

  var thePassword = "1234";
  var numberOfAttempts = 3;
  while (numberOfAttempts > 0) {
    userPasswordAttempt = prompt("Enter your password", "");

    if (userPasswordAttempt == thePassword) {
      alert("Enhorabuena");
    } else {
      numberOfAttempts--;

      if (numberOfAttempts == 0) {
        alert("You are blocked");
      }
    }
  }
}
console.log(checkPassword());

// Crea una función llamada CalculadoraInversa, nos pedirá 2 operandos (int)
// y un signo aritmético (String), según este último se realizará la
// operación correspondiente. Al final mostrará el resultado en un cuadro
// de diálogo. Los signos aritméticos disponibles son:
//+: suma los dos operadores.
//-: resta los operandos.
//*: multiplica los operandos.
///: divide los operandos, este debe dar un resultado con decimales (double)
//^: 1o operando como base y 2o como exponente.
//%: módulo, resto de la división entre operando1 y operando2.

function CalculadoraInversa() {
   const num1 = prompt("Enter first number");
   const num2 = prompt("Enter second number");
   const selection = prompt(
    " Enter operator: //+: suma los dos operadores.-: resta los operandos.*: multiplica los operandos./: divide los operandos, este debe dar un resultado con decimales (double)^: 1o operando como base y 2o como exponente.%: módulo, resto de la división entre operando1 y operando2."
  );
  //let valueFirstNo = parseInt(num1);
  //let valueSecondNo = parseInt(num2);
  // let valueOfOperator = parseInt(selection)
  const result = eval(`${num1} ${selection} ${num2}`);
  alert(`The result is ${result}`); 
}
console.log(CalculadoraInversa());