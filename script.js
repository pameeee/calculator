let input = ["", ""];
let operator = "";
let currentStat = "firstNumber";
let equal = false;

const digitButtons = document.querySelectorAll(".digit");
const operatorButtons = document.querySelectorAll(".operator");
const equalButton = document.getElementById("equal");
const clearButton = document.getElementById("clear");
const decimalButton = document.getElementById("decimal");
const mainDisplay = document.getElementById("mainDisplay");
const historyDisplay = document.getElementById("historyDisplay");

function updateMainDisplay(result) {

    if (result) {
        mainDisplay.textContent = result;
    }
    else if (currentStat === "firstNumber") {
        mainDisplay.textContent = input[0];
    } else if (currentStat === "secondNumber") {
        mainDisplay.textContent = input[1];
    }

}

function updateHistoryDisplay() {

    // if (equal && input[0] && input[1]) {
    //     historyDisplay.textContent = input[0] + " " + operator;
    // }
    if (equal) {
        historyDisplay.textContent = input[0] + " " + operator + " " + input[1] + " " + "=";
    } else {
        historyDisplay.textContent = input[0] + " " + operator;
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

    if (input[1] === "0" && operator === "/") {
        return "Cannot be divided by zero";
    }

    const result =
        Math.round(
            this.methods[operator](parseFloat(input[0]), parseFloat(input[1])) *
                100
        ) / 100;

    return result;
}

digitButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        if (currentStat === "firstNumber") {
            input[0] += button.innerHTML;
        } else if (currentStat === "secondNumber") {
            input[1] += button.innerHTML;
        }

        updateMainDisplay();

        console.log("Input: ", input);
        console.log("Operator: ", operator);
        console.log("Status: ", currentStat);
    });
});

operatorButtons.forEach(function (button) {
    button.addEventListener("click", function () {

        if (currentStat === "firstNumber" && input[0] === "") {
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
        currentStat = "secondNumber";

        console.log("Input: ", input);
        console.log("Operator: ", operator);
        console.log("Status: ", currentStat);
    });
});

equalButton.addEventListener("click", function () {

    equal = true;

    const result = calculate();
    updateMainDisplay(result);
    updateHistoryDisplay();
    input[0] = result;

    console.log("Result: ", result);
    console.log("Input: ", input);
    console.log("Operator: ", operator);
    console.log("Status: ", currentStat);
});


// equalButton.addEventListener("click", function () {

//     currentStat = "equal";

//     let result = calculate();
//     updateMainDisplay(result);
//     updateHistoryDisplay();

//     input[0] = result;
//     result = "";

//     console.log("Result: ", result);
//     console.log("Input: ", input);
//     console.log("Operator: ", operator);
//     console.log("Status: ", currentStat);
// });


// operatorButtons.forEach(function (button) {
//     button.addEventListener("click", function () {

//         operator = button.innerHTML;
        
//         if (currentStat === "firstNumber" && input[0] === "") {
//             input[0] = "0";
//         }

//         if (currentStat === "secondNumber") {
//             let result = calculate();
//             updateMainDisplay(result);
//             result = "";
//         }

//         input[1] = "";

//         updateHistoryDisplay();

//         currentStat = "secondNumber";
        

//         console.log("Input: ", input);
//         console.log("Operator: ", operator);
//         console.log("Status: ", currentStat);
//     });
// });




// To do
// Operator immediately instead of click equal
// Clicking equal continuously
// Clear
// Decimal
// Clean, refactor, and rearrange - try to merge updateDisplay



/*
        console.log("Input: ", input);
        console.log("Current input: ", inputIndex);
        console.log("Decimal button disabled: ", decimalButton.disabled);

/*

Check git log to review

Next to do: decimals

Next to do: if another operator is clicked instead of equal sigh:
run equalButton first then proceed with historyDisplay update.

*/






/* ARHIVE 2

function updateMainDisplay(result) {
    if (result) {
        mainDisplay.textContent = result;
    }
    else if (currentStat === "firstNumber") {
        mainDisplay.textContent = input[0];
    } else if (currentStat === "secondNumber") {
        mainDisplay.textContent = input[1];
    }
}

function updateHistoryDisplay() {
     if (currentStat === "firstNumber") {
        historyDisplay.textContent = input[0] + " " + operator;
    } else if (currentStat === "equal") {
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

    console.log("Input[1]: ", input[1]);
    console.log("Operator: ", operator);

    if (input[1] === "0" && operator === "/") {
        return "Cannot be divided by zero";
    }

    const result =
        Math.round(
            this.methods[operator](parseFloat(input[0]), parseFloat(input[1])) *
                100
        ) / 100;

    return result;
}

digitButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        if (currentStat === "firstNumber") {
            input[0] += button.innerHTML;
        } else if (currentStat === "secondNumber") {
            input[1] += button.innerHTML;
        }

        updateMainDisplay();

        console.log("Input: ", input);
        console.log("Operator: ", operator);
        console.log("Status: ", currentStat);
    });
});

operatorButtons.forEach(function (button) {
    button.addEventListener("click", function () {

        operator = button.innerHTML;
        
        if (currentStat === "firstNumber" && input[0] === "") {
            input[0] = "0";
        }

        if (currentStat === "secondNumber") {
            let result = calculate();
            updateMainDisplay(result);
            result = "";
        }

        input[1] = "";

        updateHistoryDisplay();

        currentStat = "secondNumber";
        

        console.log("Input: ", input);
        console.log("Operator: ", operator);
        console.log("Status: ", currentStat);
    });
});

equalButton.addEventListener("click", function () {

    currentStat = "equal";

    let result = calculate();
    updateMainDisplay(result);
    updateHistoryDisplay();

    input[0] = result;
    result = "";

    console.log("Result: ", result);
    console.log("Input: ", input);
    console.log("Operator: ", operator);
    console.log("Status: ", currentStat);
});

*/








/* ARCHIVE

let input = ["", ""];
let inputIndex = 0;
let operator = "";

const digitButtons = document.querySelectorAll(".digit");
const operatorButtons = document.querySelectorAll(".operator");
const equalButton = document.getElementById("equal");
const clearButton = document.getElementById("clear");
const decimalButton = document.getElementById("decimal");
const mainDisplay = document.getElementById("mainDisplay");
const historyDisplay = document.getElementById("historyDisplay");

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

