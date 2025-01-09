const buttons = document.querySelectorAll(".boton")
const display = document.getElementById("display")

buttons.forEach(
    button => button.addEventListener("click", () => {
        const value = button.textContent

        if (button.id === "C"){
            display.textContent = "0";
            return;
        }

        if (display.textContent === "0"){
            display.textContent = value
        } else {
            display.textContent += value;
        }
    })
)