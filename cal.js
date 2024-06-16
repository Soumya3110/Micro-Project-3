const display = document.getElementById('display');

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    if (display.value === '' || isOperator(display.value.slice(-1))) {
        return;
    }
    display.value += operator;
}

function calculateResult() {

    display.value = eval(display.value);

}

function isOperator(character) {
    return ['/', '*', '-', '+'].includes(character);
}