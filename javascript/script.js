const input = document.getElementById('display');

function clearDisplay() {
    input.value = '';
}

function addNumber(num) {
    if (input.value === 'Error') {
        input.value = '';
    }
    // Prevent multiple decimal points in a number
    if (num === '.' && input.value.includes('.')) return;
    input.value += num;
}

function addOperator(op) {
    if (input.value === 'Error') {
        input.value = '';
    }
    // Prevent multiple operators in a row
    const lastChar = input.value.slice(-1);
    if (['+', '-', '*', '/'].includes(lastChar) && op !== '%') return;
    input.value += op;
}

function calculate() {
    try {
        // Replace any non-standard characters before eval
        const sanitizedInput = input.value.replace(/[^-()\d/*+.]/g, '');
        let result = eval(sanitizedInput);
        // Handle special cases
        if (!isFinite(result) || isNaN(result)) {
            throw new Error('Invalid result');
        }
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

// Debugging: Log to see if functions are called
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', () => console.log('Button clicked: ', button.textContent));
});
