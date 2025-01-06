const buttons = document.querySelectorAll(".boton")
const display = document.getElementById("display")

buttons.forEach(
    button => button.addEventListener("click", () => {
        const value = button.textContent
        document.getElementById("display").textContent += value
    })
)