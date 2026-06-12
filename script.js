const display = document.getElementById("display");

function appendNumber(number) {
    display.value += number;
}

function clearDisplay() {
    display.value = "";
}

function appendOperator(operator) {
    display.value += operator;
}


function getExpression() {
    return display.value;
}

function setDisplay(value) {
    display.value = value;
}

function evaluateExpression(expression) {
    return eval(expression);
}


             
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) return "Error";
    return a / b;
}



function calculate() {
    try {
        const expression = getExpression();
        const result = evaluateExpression(expression);

        setDisplay(result);
    } catch {
        setDisplay("Error");
    }
}

