async function ejecutarPromesa() {
    try {
        const promesa = new Promise((resolve, reject) => {
            // Generar un número aleatorio entre 0 y 1
            const numeroAleatorio = Math.random();

            // Simular un proceso asíncrono con un retraso de 1 segundo
            setTimeout(() => {
                if (numeroAleatorio > 0.5) {
                    resolve("¡Promesa cumplida!");
                } else {
                    reject("¡Promesa rechazada...!");
                }
            }, 1000);
        });

        // Esperar a que la promesa se resuelva
        const mensaje = await promesa;
        console.log(mensaje);
    } catch (error) {
        console.error(error);
    }
}
ejecutarPromesa();
