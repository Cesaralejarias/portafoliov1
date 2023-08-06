document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });
    console.log(data); // Aquí puedes enviar los datos a través de una petición HTTP

    // Mensaje de confirmación
    const statusMessage = document.getElementById('statusMessage');
    statusMessage.textContent = '¡Mensaje enviado con éxito!';
    statusMessage.style.color = 'green';
});

function openLink(url) {
    window.open(url, '_blank');
}