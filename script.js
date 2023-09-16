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
} // refactored

function updateHistoryDisplay() {
    historyDisplay.textContent = equal
        ? input[0] + " " + operator + " " + input[1] + " " + "="
        : (historyDisplay.textContent = input[0] + " " + operator);
} // refactored

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
} // not refactored

function checkDecimal() {
    if (input[currentStat].includes(".")) {
        decimalButton.disabled = true;
    } else {
        decimalButton.disabled = false;
    }
}

digitButtons.forEach(function (button) {
    button.addEventListener("click", function (e) {

        if (equal) {
            clearButton.click();
        }

        if (currentStat === 0) {
            input[currentStat] += button.innerHTML;
        } else if (currentStat === 1) {
            input[currentStat] += button.innerHTML;
        }

        checkDecimal();
        updateMainDisplay();
    });
});

operatorButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        decimalButton.disabled = false;

        if (input[0] === "") {
            input[0] = "0";
        }

        if (input[0] && input[1] && !equal) {
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

equalButton.addEventListener("click", function () {
    decimalButton.disabled = false;

    equal = true;

    const result = calculate();
    updateMainDisplay(result);
    updateHistoryDisplay();
    input[0] = result;
});

clearButton.addEventListener("click", function () {
    input = ["", ""];
    operator = "";
    currentStat = 0;
    equal = false;
    mainDisplay.textContent = 0;
    historyDisplay.textContent = "";
});

backspaceButton.addEventListener("click", function () {
    input[currentStat] = input[currentStat].slice(0, input[currentStat].length - 1);
    if (input[currentStat] === "") {
        input[currentStat] = "0"
    }
    checkDecimal();
    updateMainDisplay();
});

document.addEventListener("keydown", function (event) {
    const button = document.querySelector(`[data-key="${event.key}"]`);
    if (button) {
        button.click();
    }
});