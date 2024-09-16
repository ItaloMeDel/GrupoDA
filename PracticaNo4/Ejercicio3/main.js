function generarCont(long,incluMayusculas=true,incluMinusculas=true,incluNumeros=true,incluSimbolos=true) {
    const caraMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const caraMinusculas = "abcdefghijklmnopqrstuvwxyz";
    const caraNumeros = "0123456789";
    const caraSimbolos = "!@#$%^&*()_+[]{}|;:',.<>?";

    let caracteres = "";

    if (incluMayusculas) caracteres += caraMayusculas;
    if (incluMinusculas) caracteres += caraMinusculas;
    if (incluNumeros) caracteres += caraNumeros;
    if (incluSimbolos) caracteres += caraSimbolos;

    let contrasena = "";
    for (let i = 0; i < long; i++) {
        const aleatorio = Math.floor(Math.random() * caracteres.length);
        contrasena += caracteres[aleatorio];
    }

    return contrasena;
}

document.getElementById("generateBtn").addEventListener("click", function() {
    const long = parseInt(document.getElementById("length").value);
    const mayusculas = document.getElementById("uppercase").checked;
    const minusculas = document.getElementById("lowercase").checked;
    const numeros = document.getElementById("numbers").checked;
    const simbolos = document.getElementById("symbols").checked;

    const contrasena = generarCont(long,mayusculas,minusculas,numeros,simbolos);
    document.getElementById("generatedPassword").value = contrasena;
});
