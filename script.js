let input = ["", ""];
let inputIndex = 0;
let operator = "";

// const digitButtons = document.querySelectorAll(
//     "button:not(#equal):not(.operator)"
// );
const digitButtons = document.querySelectorAll(".digit");
const operatorButtons = document.querySelectorAll(".operator");
const equalButton = document.getElementById("equal");
const clearButton = document.getElementById("clear");
const decimalButton = document.getElementById("decimal");
const mainDisplay = document.getElementById("mainDisplay");
const historyDisplay = document.getElementById("historyDisplay");

// decimalButton.disabled = true;

// if (button) {
//     // Check if the button exists in the DOM
//     button.disabled = true;
//     button.style.backgroundColor = "red";
//   } else {
//     console.error("Button not found in the DOM.");
//   }
// });

function updateMainDisplay(result) {
    if (!result) {
        mainDisplay.textContent = input[inputIndex];
    } else {
        mainDisplay.textContent = result;
    }
}

function updateHistoryDisplay() {
    if (inputIndex === 1) {
        historyDisplay.textContent = input[0] + " " + operator;
    } else {
        historyDisplay.textContent =
            input[0] + " " + operator + " " + input[1] + " " + "=";
    }
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

    const result = this.methods[operator](
        parseFloat(input[0]),
        parseFloat(input[1])
    );
    return result;
}

digitButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        input[inputIndex] += button.innerHTML;
        // if input[inputIndex] already has one ".", then disable the decimal button

        // if (input[inputIndex].includes(".")) {
        //     decimalButton.disabled = true;
        // }

        if (input[inputIndex].includes(".")) {
            decimalButton.disabled = true;
        }

        updateMainDisplay();

        console.log("Input: ", input);
        console.log("Current input: ", inputIndex);
        console.log("Decimal button disabled: ", decimalButton.disabled);
    });
});

operatorButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        if (!input[0]) {
            input[0] = "0";
        }

        inputIndex = 1;

        decimalButton.disabled = false;

        operator = button.innerHTML;
        updateHistoryDisplay();

        console.log("Input: ", input);
        console.log("Current input: ", inputIndex);
        console.log("Decimal button disabled: ", decimalButton.disabled);
    });
});

equalButton.addEventListener("click", function () {

    decimalButton.disabled = false;

    inputIndex = 0;
    updateHistoryDisplay();
    
    const result = calculate();
    updateMainDisplay(result);

    input = [result.toString(), ""];

    console.log("Input: ", input);
    console.log("Current input: ", inputIndex);
    console.log("Decimal button disabled: ", decimalButton.disabled);
});

clearButton.addEventListener("click", function () {
    input = ["", ""];
    inputIndex = 0;
    operator = "";

    mainDisplay.textContent = 0;
    historyDisplay.textContent = "";
});

/*

Check git log to review

Next to do: decimals

Next to do: if another operator is clicked instead of equal sigh:
run equalButton first then proceed with historyDisplay update.

*/
