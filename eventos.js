document.addEventListener('DOMContentLoaded', () => {

    const buttonContainer = document.querySelector('.button-container');
    buttonContainer.addEventListener('click', () => {
        alert('¡Hola! Soy el div :)');
    });
    
    const button = document.getElementById('greetingButton');
    button.addEventListener('click', () => {
        alert('Hola!');
        event.stopPropagation(); 

    });
});
