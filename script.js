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

let input = ["", ""];
let inputIndex = 0;
let operator = "";

const calculator = new Calculate();
let digitButtons = document.querySelectorAll("button:not(#equal):not(.operator)");
let operatorButtons = document.querySelectorAll(".operator");
let equalButton = document.querySelector("#equal");

digitButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        input[inputIndex] += button.innerHTML;
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
