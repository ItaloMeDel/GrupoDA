// Función para convertir Celsius a Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Función para convertir Fahrenheit a Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

// Función para manejar la conversión y mostrar el resultado
function convertTemperature() {
    const tempInput = document.getElementById('tempInput').value;
    const tempScale = document.getElementById('tempScale').value;
    const resultDiv = document.getElementById('result');

    let result;
    if (tempScale === 'Celsius') {
        result = celsiusToFahrenheit(parseFloat(tempInput));
        resultDiv.innerHTML = `${tempInput}°C es igual a ${result.toFixed(2)}°F`;
    } else if (tempScale === 'Fahrenheit') {
        result = fahrenheitToCelsius(parseFloat(tempInput));
        resultDiv.innerHTML = `${tempInput}°F es igual a ${result.toFixed(2)}°C`;
    }
}

// Agregar evento al botón de conversión
document.getElementById('convertBtn').addEventListener('click', convertTemperature);
