// a) Uso de Variables y Constantes

// Crear un bloque de código cualquiera
{
    // Declarar una variable con ámbito de bloque
    let variableDeBloque = 5;
    
    // Declarar una constante en el ámbito del bloque
    const constanteDeBloque = 10;
    
    // Imprimir valores dentro del bloque
    console.log(variableDeBloque); // 5
    console.log(constanteDeBloque); // 10
}

// Demostración de ámbito de bloque
// Las siguientes líneas provocan un error porque las variables no son accesibles fuera del bloque
// console.log(variableDeBloque); // Error: variableDeBloque is not defined
// console.log(constanteDeBloque); // Error: constanteDeBloque is not defined

// b) Elevación de Variables (Hoisting)

// Antes de la inicialización, el valor es undefined debido al hoisting
console.log(x === undefined); // true

// Inicialización de la variable 'x'
var x = 3; 

// Ejemplo adicional con hoisting dentro de una función
var myvar = 'my value';
(function() {
    // La variable 'myvar' se eleva, pero el valor se establece después de su declaración
    console.log(myvar); // undefined
    var myvar = 'valor local';
})();

// c) Uso de `console.log` y Scope

// Imprimir valores de variables no asignadas
console.log(y); // undefined
var y; // Declaración de la variable 'y'

// Crear funciones anidadas para verificar el alcance (scope)
function externa() {
    var variableExterna = 'Externa';
    console.log(variableExterna); // Externa

    function interna() {
        var variableInterna = 'Interna';
        console.log(variableExterna); // Externa
        console.log(variableInterna); // Interna
    }

    interna();

    // Esto causará un error porque 'variableInterna' no es accesible fuera de la función 'interna'
    // console.log(variableInterna); // Error: variableInterna is not defined
}
externa(); // Llamado a la función externa

// d) Uso de Tipos de Datos y Cambio de Tipos de Datos

// Ejemplo de cambio de tipo de dato
var answer = 42; // 'answer' es un número
answer = 'Gracias por todo el pescado...'; // Ahora es una cadena

// Uso de `parseInt` para convertir cadenas a números enteros en diferentes bases
console.log(parseInt("F", 16));       // 15 (Base 16)
console.log(parseInt("17", 8));       // 15 (Base 8)
console.log(parseInt("15", 10));      // 15 (Base 10)
console.log(parseInt(15.99, 10));     // 15 (Base 10, valor entero)
console.log(parseInt("FXX123", 16));  // 15 (Base 16, ignora caracteres no válidos)
console.log(parseInt("1111", 2));     // 15 (Base 2, binario)
console.log(parseInt("15*3", 10));    // 15 (Base 10, ignora caracteres no válidos)
console.log(parseInt("12", 13));      // 15 (Base 13)
console.log(parseInt("Hello", 8));    // NaN (No es un número)
console.log(parseInt("0x7", 10));     // 0  (Ignora prefijo hexadecimal 0x)
console.log(parseInt("546", 2));      // NaN (Dígitos no válidos en base 2)

// Conversión de número a cadena usando `toString()`
var howMany = 10;
alert("howMany.toString() is " + howMany.toString()); // Muestra "10"

alert("45 .toString() is " + 45 .toString()); // Muestra "45"

var x = 7;
alert(x.toString(2)); // Muestra "111" (representación binaria de 7)
