const display = document.getElementById("display");
const buttons = document.querySelectorAll(".boton");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const botonApretado = button.textContent.trim();

        if (button.id === "C") {
            display.textContent = "0";
            return;
        }

        if (button.id === "=") {
            display.textContent = eval(display.textContent);
            return;
        }

        if (display.textContent === "0") {
            display.textContent = botonApretado;
        } else {
            display.textContent += botonApretado;
        }
    })
})

function cambiarColor(modo) {
    const body = document.querySelector('body');

    // Verificar si el fondo es oscuro o claro
    if (modo === 'light_mode') {
        body.classList.remove('dark_mode');
        body.classList.add('light_mode');
    } else {
        body.classList.remove('light_mode');
        body.classList.add('dark_mode');
    }
}

