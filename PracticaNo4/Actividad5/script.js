// a) CREACIÓN DE ARRAYS

// 1. Crear 3 arrays diferentes con 3 métodos

// Método 1: Array literal
const numeros = [1, 2, 3, 4, 5];
const cadenas = ["apple", "banana", "cherry"];
const objetos = [{ nombre: "Juan", edad: 25 }, { nombre: "Ana", edad: 30 }];

// Método 2: Array constructor
const numeros2 = new Array(6, 7, 8, 9, 10);
const cadenas2 = new Array("dog", "cat", "fish");
const objetos2 = new Array({ nombre: "Luis", edad: 40 }, { nombre: "Marta", edad: 45 });

// Método 3: Array.from()
const numeros3 = Array.from([11, 12, 13, 14, 15]);
const cadenas3 = Array.from("hello");
const objetos3 = Array.from([{ nombre: "Sofia", edad: 20 }, { nombre: "Carlos", edad: 28 }]);

// 2. Funciones para agregar datos a los arrays
function agregarNumero(array, numero) {
    array.push(numero);
}

function agregarCadena(array, cadena) {
    array.push(cadena);
}

function agregarObjeto(array, objeto) {
    array.push(objeto);
}

// Ejemplo de uso
agregarNumero(numeros, 6);
agregarCadena(cadenas, "date");
agregarObjeto(objetos, { nombre: "Pedro", edad: 35 });

// 3. Mostrar resultados en la consola y en la página web
console.log(numeros);
console.log(cadenas);
console.log(objetos);

// Visualizar los resultados en la página web
document.body.innerHTML = `
    <h1>Arrays en JavaScript</h1>
    <h2>Array Numérico:</h2>
    <pre>${JSON.stringify(numeros, null, 2)}</pre>
    <h2>Array de Cadenas:</h2>
    <pre>${JSON.stringify(cadenas, null, 2)}</pre>
    <h2>Array de Objetos:</h2>
    <pre>${JSON.stringify(objetos, null, 2)}</pre>
`;

// b) MANIPULACIÓN DE ARRAYS

// Aplicar acciones básicas: map, filter, reduce
const numerosDuplicados = numeros.map(num => num * 2);
const cadenasEnMayusculas = cadenas.map(cadena => cadena.toUpperCase());
const numerosMayoresDeCinco = numeros.filter(num => num > 5);
const cadenasConLetras = cadenas.filter(cadena => cadena.length > 5);
const sumaNumeros = numeros.reduce((total, num) => total + num, 0);

// Mostrar resultados de la manipulación
console.log(numerosDuplicados);
console.log(cadenasEnMayusculas);
console.log(numerosMayoresDeCinco);
console.log(cadenasConLetras);
console.log(sumaNumeros);

document.body.innerHTML += `
    <h2>Array Manipulado</h2>
    <h3>Números Doblados:</h3>
    <pre>${JSON.stringify(numerosDuplicados, null, 2)}</pre>
    <h3>Cadenas en Mayúsculas:</h3>
    <pre>${JSON.stringify(cadenasEnMayusculas, null, 2)}</pre>
    <h3>Números Mayores de Cinco:</h3>
    <pre>${JSON.stringify(numerosMayoresDeCinco, null, 2)}</pre>
    <h3>Cadenas con Más de 5 Letras:</h3>
    <pre>${JSON.stringify(cadenasConLetras, null, 2)}</pre>
    <h3>Suma de Números:</h3>
    <pre>${sumaNumeros}</pre>
`;

// c) USO DE ITERADORES DE ARRAYS

// Aplicar iteradores: forEach
document.body.innerHTML += `
    <h2>Iteradores de Arrays</h2>
    <h3>ForEach - Números:</h3>
    <pre>${numeros.map(num => `Número: ${num}`).join('<br/>')}</pre>
    <h3>ForEach - Cadenas:</h3>
    <pre>${cadenas.map(cadena => `Cadena: ${cadena}`).join('<br/>')}</pre>
    <h3>ForEach - Objetos:</h3>
    <pre>${objetos.map(obj => `Objeto: ${obj.nombre}, Edad: ${obj.edad}`).join('<br/>')}</pre>
`;
