function appendNumber(num) {
    document.getElementById('display').value += num;
}

function appendOperator(operator) {
    var displayValue = document.getElementById('display').value;
    if (displayValue !== '' && '+-*/'.indexOf(displayValue.slice(-1)) === -1) {
        document.getElementById('display').value += operator;
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    var displayValue = document.getElementById('display').value;
    try {
        var result = eval(displayValue);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}