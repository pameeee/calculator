function Calculate() {
    this.methods = {
        "+": function (firstNum, secondNum) {
            return firstNum + secondNum
        },

        "-": function (firstNum, secondNum) {
            return firstNum - secondNum
        },

        "*": function (firstNum, secondNum) {
            return firstNum * secondNum
        },

        "/": function (firstNum, secondNum) {
            return firstNum / secondNum
        },
    };

    // this.getResult = function (firstNum, secondNum, op) {
    //     const result = this.methods[op](firstNum, secondNum);
    //     input = [result];
    //     console.log("Input so far: ", input);
    // }

    this.getResult = function(firstNum, secondNum, op) {
        const result = this.methods[op](parseInt(firstNum), parseInt(secondNum));
        input[0] = result.toString();
        inputIndex = 0;
        console.log("Result: ", result);
        console.log("Input so far: ", input);
    }

}

function updateDisplay() { // Might delete
    if (displayStatus === "firstNum") {
        mainDisplay.textContent = input[inputIndex];
    }
}

let input = ["", ""];
let inputIndex = 0;
let displayStatus = "firstNum"; // Might delete
let operator = "";

const calculator = new Calculate();
const digitButtons = document.querySelectorAll("button:not(#equal):not(.operator)");
const operatorButtons = document.querySelectorAll(".operator");
const equalButton = document.querySelector("#equal");
const historyDisplay = document.getElementById("historyDisplay");
const mainDisplay = document.getElementById("mainDisplay");


digitButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        input[inputIndex] += button.innerHTML;
        updateDisplay();
        console.log("Input so far: ", input);
    });
});

operatorButtons.forEach(
    function (button) {
        button.addEventListener("click", function() {
            input[1] = "";
            operator = button.innerHTML;
            console.log("Input so far: ", input);
            console.log("Operator: ", operator);
            inputIndex = 1;
        });
    }
);

equalButton.addEventListener("click", function() {
    calculator.getResult(input[0], input[1], operator);
});

/*

Check git log to review
Next to do: Update function when operator is clicked
Next to do: Create clear

*/