function add(x, y) {
    console.log(x + y);
    return x + y
}
//
let input = [];

var buttons = document.querySelectorAll("button");
buttons.forEach(
    function(button) {
        button.addEventListener("click", function() {
            input.push(!button.id ? parseFloat(button.innerHTML) : button.innerHTML);
            console.log("Input so far: ", input);
        });
    }
);

