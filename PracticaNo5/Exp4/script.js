document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); 
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if(email && message) {
        alert("Gracias por tu mensaje. Nos pondremos en contacto pronto.");
    } else {
        alert("Por favor, completa todos los campos.");
    }
});
