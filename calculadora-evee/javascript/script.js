const input = document.getElementById('display');

function clearDisplay() {
    input.value = '';
}

function addNumber(num) {
    if (input.value === 'Error') {
        input.value = '';
    }
    input.value += num;
}

function addOperator(op) {
    if (input.value === 'Error') {
        input.value = '';
    }
    input.value += op;
}

function calculate() {
    try {
        let result = eval(input.value);
        input.value = result;
    } catch (error) {
        input.value = 'Error';
    }
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (key >= 0 && key <= 9) {
        addNumber(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        addOperator(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Escape') {
        clearDisplay();
    } else if (key === '.') {
        addNumber(key);
    }
});
