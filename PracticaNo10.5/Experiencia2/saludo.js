function saludar(nombre) {
    return `Hola, ${nombre}!`;
}
function despedir(nombre) {
    return `Adiós, ${nombre}!`;
}
module.exports = {
    saludar: saludar,
    despedir: despedir
};