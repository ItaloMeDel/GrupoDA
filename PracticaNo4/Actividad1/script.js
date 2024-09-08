document.getElementsByClassName("boton")[0].addEventListener("click", function () {
    document.getElementsByClassName("parrafo")[0].textContent = "Otro texto.";
});

// Creación de objeto

{
    let nombre = "Juan";
    const edad = 30;
    console.log(nombre);
    console.log(edad);
}

// Uso de console.log con variable no accesible

console.log(nombre);
console.log(edad);

// Al crear una variable esta es de tipo indefinido

console.log(x === undefined);

// Declaración variable externa

var x = 3;

var myvar = "my value";
(function () {
    console.log(myvar);
    var myvar = "valor local";
})();


// Función externa e interna no accesible

function externa() {
    var externaVar = "exterior";
    console.log(externaVar);

    function interna() {
        var internaVar = "interior";
        console.log(externaVar);
        console.log(internaVar);
    }

    interna();
    console.log(internaVar);
}
externa();

// Función flecha

const funcion = () => {
    console.log("text");
}
funcion();

// Función sayHello

function sayHello() {
    return "Hello, ";
}

// Llamado de función

function greeting(helloMessage, name) {
    console.log(helloMessage() + name);
}
greeting(sayHello, "JavaScript!");

// Llamado de función interna

function makeFunc() {
    const name = 'Mozilla';
    function displayName() {
        console.log(name);
    }
    return displayName;
}
const myFunc = makeFunc();
myFunc();

