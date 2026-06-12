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

function calculate() {
    try {
        const expression = getExpression();
        const result = evaluateExpression(expression);

        setDisplay(result);
    } catch {
        setDisplay("Error");
    }
}

