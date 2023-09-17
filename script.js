let input = ["", ""];
let operator = "";
let currentStat = 0;
let equal = false;

const digitButtons = document.querySelectorAll(".digit");
const operatorButtons = document.querySelectorAll(".operator");
const equalButton = document.getElementById("equal");
const clearButton = document.getElementById("clear");
const decimalButton = document.getElementById("decimal");
const backspaceButton = document.getElementById("backspace");
const mainDisplay = document.getElementById("mainDisplay");
const historyDisplay = document.getElementById("historyDisplay");

function updateMainDisplay(result) {
    mainDisplay.textContent = result !== undefined ? result : input[currentStat];
} 

function updateHistoryDisplay() {
    historyDisplay.textContent = equal
        ? input[0] + " " + operator + " " + input[1] + " " + "="
        : (historyDisplay.textContent = input[0] + " " + operator);
} 

function calculate() {
    this.methods = {
        "+": function (firstNum, secondNum) {
            return firstNum + secondNum;
        },

        "-": function (firstNum, secondNum) {
            return firstNum - secondNum;
        },

        "*": function (firstNum, secondNum) {
            return firstNum * secondNum;
        },

        "/": function (firstNum, secondNum) {
            return firstNum / secondNum;
        },
    };

    if (input[1] === "0" && operator === "/") {
        return "Cannot be divided by zero";
    }

    const result =
        Math.round(
            this.methods[operator](parseFloat(input[0]), parseFloat(input[1])) *
                100
        ) / 100;

    return result.toString();
} 

function checkDecimal() {
    decimalButton.disabled = input[currentStat].includes(".");
} 

digitButtons.forEach( button => {
    button.addEventListener("click", () => {
        if (equal) clearButton.click();
        input[currentStat] += button.innerHTML;
        checkDecimal();
        updateMainDisplay();
    });
}); 

operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        decimalButton.disabled = false;

        if (input[0] === "") {
            input[0] = "0";
        } else if (input[0] && input[1] && !equal) {
            const result = calculate();
            input[0] = result;
            updateMainDisplay(result);
        }

        operator = button.innerHTML;

        equal = false;
        updateHistoryDisplay();

        input[1] = "";
        currentStat = 1;
    });
}); 

equalButton.addEventListener("click", () => {
    decimalButton.disabled = false;
    equal = true;
    const result = calculate();
    updateMainDisplay(result);
    updateHistoryDisplay();
    input[0] = result;
}); 

clearButton.addEventListener("click", () => {
    input = ["", ""];
    operator = "";
    currentStat = 0;
    equal = false;
    mainDisplay.textContent = 0;
    historyDisplay.textContent = "";
}); 

backspaceButton.addEventListener("click", () => {
    input[currentStat] = input[currentStat].slice(0, -1) || "0  ";
    checkDecimal();
    updateMainDisplay();
}); 

document.addEventListener("keydown", function (event) {
    const button = document.querySelector(`[data-key="${event.key}"]`);
    button?.click();
});