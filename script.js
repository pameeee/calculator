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
        input = [result]
        console.log(result);
        console.log("Input so far: ", input);
    }

}

let input = [];
const calculator = new Calculate();
// change to switch case
var buttons = document.querySelectorAll("button");
buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        if (button.id === "equal") {
            let firstNum = input[0];
            let secondNum = input[2];
            let op = input[1];

            calculator.getResult(firstNum, secondNum, op);
        } else if (isNaN(button.innerHTML)) {
            input.push(button.innerHTML.toString());
        } else{
            input.push(parseInt(button.innerHTML));
        }
        console.log("Input so far: ", input);
    });
});
