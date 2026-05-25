
document.addEventListener('DOMContentLoaded', () => {
    console.log("¡El archivo script.js se ha cargado correctamente!");

    // --- brillo en forms ---
    const formElements = document.querySelectorAll('input, select');

    formElements.forEach(element => {
        
        element.addEventListener('focus', () => {
            element.style.borderColor = '#2ecc71';
            element.style.outline = 'none';
            element.style.boxShadow = '0 0 10px rgba(46, 204, 113, 0.3)';
        });

        
        element.addEventListener('blur', () => {
            element.style.borderColor = '#ccc';
            element.style.boxShadow = 'none';
        });
    }); });