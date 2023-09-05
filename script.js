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

    this.getResult = function (firstNum, secondNum, op) {
        const result = this.methods[op](firstNum, secondNum);
        input = [result];
        console.log("Input so far: ", input);
    }

}

let input = ["", ""];
let inputIndex = 0;
let operator = "";

const calculator = new Calculate();
let digitButtons = document.querySelectorAll("button:not(#equal):not(.operator)");

digitButtons.forEach(
    function (button) {
        button.addEventListener("click", function() {
            if (inputIndex === 0) {
                input[inputIndex] += button.innerHTML;
                console.log("Input so far: ", input);
            }
        });
    }
);


