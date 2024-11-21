// Objeto JavaScript
const curso = {
    titulo: "Aprende Node.js",
    vistas: 10000,
    temas: ["Node.js", "Express", "JavaScript"],
    esPublico: true
};

// Convertir el objeto JavaScript a una cadena JSON
const cursoJSON = JSON.stringify(curso);
console.log("Objeto JavaScript convertido a JSON:");
console.log(cursoJSON);

// Convertir la cadena JSON de nuevo a un objeto JavaScript
const cursoObjeto = JSON.parse(cursoJSON);
console.log("\nCadena JSON convertida a objeto JavaScript:");
console.log(cursoObjeto);