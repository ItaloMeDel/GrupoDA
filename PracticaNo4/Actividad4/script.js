// a) CREACIÓN DE OBJETOS

// 1. Creación de objetos utilizando iniciadores de objetos (literal)
const persona1 = {
    nombre: "Juan",
    edad: 25,
    saludo: function() {
        console.log("Hola, mi nombre es " + this.nombre);
    }
};
persona1.saludo(); // Hola, mi nombre es Juan

// 2. Creación de objetos utilizando métodos constructores
function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.saludo = function() {
        console.log("Hola, mi nombre es " + this.nombre);
    };
}
const persona2 = new Persona("María", 30);
persona2.saludo(); // Hola, mi nombre es María

// 3. Creación de objetos utilizando el método Object.create()
const prototipoPersona = {
    saludo: function() {
        console.log("Hola, mi nombre es " + this.nombre);
    }
};
const persona3 = Object.create(prototipoPersona);
persona3.nombre = "Carlos";
persona3.edad = 35;
persona3.saludo(); // Hola, mi nombre es Carlos

// b) AGREGANDO PROPIEDADES A LOS OBJETOS

// 1. Agregar propiedades a los objetos utilizando iniciadores de objetos
const coche1 = {
    marca: "Toyota",
    modelo: "Corolla"
};
coche1.año = 2020; // Se agrega la propiedad 'año'
console.log(coche1); // {marca: "Toyota", modelo: "Corolla", año: 2020}

// 2. Agregar propiedades a los objetos utilizando métodos constructores
function Coche(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
}
const coche2 = new Coche("Honda", "Civic");
coche2.año = 2019; // Se agrega la propiedad 'año'
console.log(coche2); // {marca: "Honda", modelo: "Civic", año: 2019}

// 3. Agregar propiedades a los objetos utilizando el método Object.create()
const prototipoCoche = {
    mostrarMarca: function() {
        console.log("Este coche es un " + this.marca);
    }
};
const coche3 = Object.create(prototipoCoche);
coche3.marca = "Ford";
coche3.modelo = "Mustang";
coche3.año = 2021; // Se agrega la propiedad 'año'
console.log(coche3); // {marca: "Ford", modelo: "Mustang", año: 2021}
coche3.mostrarMarca(); // Este coche es un Ford
