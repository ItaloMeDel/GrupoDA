// a) USO DE OBJETO WINDOW

// 1. Función para visualizar las propiedades del objeto Window
function mostrarPropiedadesWindow() {
    // Mostrar todas las propiedades del objeto window
    console.log("Propiedades del objeto Window:");
    for (const prop in window) {
        if (window.hasOwnProperty(prop)) {
            console.log(prop);
        }
    }
}

// 2. Uso de algunos métodos del objeto Window
function mostrarMetodosWindow() {
    console.log("Métodos del objeto Window:");
    console.log("window.alert('Hola mundo!');");
    console.log("window.confirm('¿Desea continuar?');");
    console.log("window.prompt('Ingrese su nombre:');");

    // Ejemplos prácticos
    window.alert("Esto es una alerta.");
    const confirmacion = window.confirm("¿Desea continuar?");
    console.log("Confirmación:", confirmacion);
    const nombre = window.prompt("Ingrese su nombre:");
    console.log("Nombre ingresado:", nombre);
}

// Llamadas a las funciones de Window
mostrarPropiedadesWindow();
mostrarMetodosWindow();

// b) USO DEL OBJETO ARRAY

// 1. Función para visualizar las propiedades del objeto Array
function mostrarPropiedadesArray() {
    console.log("Propiedades del objeto Array:");
    for (const prop in Array) {
        if (Array.hasOwnProperty(prop)) {
            console.log(prop);
        }
    }
}

// 2. Uso de algunos métodos del objeto Array
function mostrarMetodosArray() {
    console.log("Métodos del objeto Array:");
    console.log("Array.isArray([1,2,3])", Array.isArray([1, 2, 3]));
    console.log("Array.of(1, 2, 3)", Array.of(1, 2, 3));
    console.log("Array.from('hello')", Array.from('hello'));

    // Ejemplos prácticos
    console.log("Array.isArray([1,2,3]):", Array.isArray([1, 2, 3]));
    console.log("Array.of(1,2,3):", Array.of(1, 2, 3));
    console.log("Array.from('hello'):", Array.from('hello'));
}

// Llamadas a las funciones de Array
mostrarPropiedadesArray();
mostrarMetodosArray();

// c) USO DE OBJETO NUMBER

// 1. Función para visualizar las propiedades del objeto Number
function mostrarPropiedadesNumber() {
    console.log("Propiedades del objeto Number:");
    for (const prop in Number) {
        if (Number.hasOwnProperty(prop)) {
            console.log(prop);
        }
    }
}

// 2. Uso de algunos métodos del objeto Number
function mostrarMetodosNumber() {
    console.log("Métodos del objeto Number:");
    console.log("Number.isInteger(4)", Number.isInteger(4));
    console.log("Number.isNaN(NaN)", Number.isNaN(NaN));
    console.log("Number.parseFloat('3.14')", Number.parseFloat('3.14'));
    console.log("Number.parseInt('42', 10)", Number.parseInt('42', 10));

    // Ejemplos prácticos
    console.log("Number.isInteger(4):", Number.isInteger(4));
    console.log("Number.isNaN(NaN):", Number.isNaN(NaN));
    console.log("Number.parseFloat('3.14'):", Number.parseFloat('3.14'));
    console.log("Number.parseInt('42', 10):", Number.parseInt('42', 10));
}

// Llamadas a las funciones de Number
mostrarPropiedadesNumber();
mostrarMetodosNumber();
