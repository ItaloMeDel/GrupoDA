// a) CIUDADANO DE PRIMERA CLASE

// 1. Ejemplo de función de primera clase
const foo = () => {
    console.log("foobar");
}
foo(); // Se invoca usando la variable 'foo'
// Descripción: Las funciones en JavaScript son ciudadanos de primera clase, lo que significa que se pueden asignar a variables, pasar como argumentos y retornar desde otras funciones.


// 2. Pasar una función como argumento a otra función
function sayHello() {
    return "Hello, ";
}
function greeting(helloMessage, name) {
    console.log(helloMessage() + name);
}
greeting(sayHello, "JavaScript!"); // Hello, JavaScript!
// Descripción: Aquí `sayHello` se pasa como argumento a la función `greeting`, lo que permite que se llame dentro de `greeting`.

// 3. Función que retorna otra función
function sayHello() {
    return () => {
        console.log("Hello!");
    };
}
const helloFunction = sayHello();
helloFunction(); // Hello!
// Descripción: En este ejemplo, `sayHello` devuelve una función que imprime "Hello!". El retorno de una función desde otra es una propiedad de las funciones de primera clase.

// Condiciones de una función de primera clase:
// - Se puede asignar a una variable.
// - Se puede pasar como argumento a otra función.
// - Se puede retornar desde otra función.

// b) CLOSURE

// 1. Ejemplo de closure
function makeFunc() {
    const name = 'Mozilla';
    function displayName() {
        console.log(name);
    }
    return displayName;
}
const myFunc = makeFunc();
myFunc(); // Mozilla
// Descripción: Un closure es una función que recuerda su ámbito léxico incluso cuando se ejecuta fuera de ese ámbito. `displayName` recuerda el valor de `name` aunque se ejecute fuera de `makeFunc`.

// Condiciones de un closure:
// - Una función anidada que tiene acceso a las variables de su función exterior incluso después de que la función exterior haya terminado de ejecutarse.

// c) ÁMBITO DE FUNCIÓN

// 1. Variables declaradas dentro de una función no son accesibles desde fuera
function exampleFunction() {
    const x = "declared inside function"; // x solo es accesible dentro de exampleFunction
    console.log("Inside function");
    console.log(x); // "declared inside function"
}
// console.log(x); // Error: x is not defined
// Descripción: El ámbito de una variable declarada con `const` o `let` dentro de una función es local a esa función.

// 2. Variables globales accesibles dentro de una función
const x = "declared outside function";
function exampleFunction() {
    console.log("Inside function");
    console.log(x); // "declared outside function"
}
exampleFunction();
console.log("Outside function");
console.log(x); // "declared outside function"
// Descripción: Las variables globales son accesibles tanto dentro como fuera de las funciones.

// 3. Manejo de excepciones con bloques try-catch-finally
function f() {
    try {
        console.log(0); // Se ejecuta normalmente
        throw 'bogus'; // Lanza una excepción
    } catch (e) {
        console.log(1); // Captura el error
        return true; // Este return es suspendido
    } finally {
        console.log(3); // Se ejecuta siempre
        return false; // Sobrescribe el return anterior
    }
}
console.log(f()); // 0, 1, 3, false
// Descripción: El bloque `finally` siempre se ejecuta, y puede sobrescribir un valor retornado en `catch`. El return dentro de `catch` se suspende hasta que finaliza `finally`.

// d) MANEJO DE EXCEPCIONES

// 1. Ejemplo de manejo de excepciones personalizadas
function UserException(message) {
    this.message = message;
    this.name = 'UserException';
}

function getMonthName(mo) {
    mo--; // Ajusta el número de mes para el índice del array (1 = Ene, 12 = Dic)
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    if (months[mo] !== undefined) {
        return months[mo];
    } else {
        throw new UserException('InvalidMonthNo'); // Lanza una excepción personalizada
    }
}

let monthName;
try {
    const myMonth = 15; // 15 está fuera del rango y debe generar una excepción
    monthName = getMonthName(myMonth);
} catch (e) {
    monthName = 'unknown';
    console.error(e.message, e.name); // Muestra el mensaje de error y el nombre de la excepción
}
// Descripción: Este ejemplo muestra cómo crear y lanzar excepciones personalizadas. La función `getMonthName` lanza una excepción si el número de mes está fuera del rango permitido (1-12).
