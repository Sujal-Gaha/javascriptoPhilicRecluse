//!                 UNDER CONSTRUCTION

const displayArea = document.querySelector(".display");
displayArea.innerText = "";

const allButtons = document.querySelectorAll('button');

allButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        let btnValue = button.innerText;
        if (btnValue === "=") {
            console.log("Working");
            calculate(displayArea.value);
        }
        else if (btnValue === "C") {
            displayArea.innerText = "";
        } else {
            updateDisplay(btnValue);
        }
    });
});

function updateDisplay(value) {
    displayArea.innerText += value;
}

function calculate(expression) {
    displayArea.innerText = "";
    console.log(expression);
    return new Function('return ' + expression)();
}