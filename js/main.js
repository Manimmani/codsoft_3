
document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let currentInput = '';
    let operator = '';
    let firstOperand = '';
    let secondOperand = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonValue = button.textContent;

            if (buttonValue === 'C') {
                currentInput = '';
                operator = '';
                firstOperand = '';
                secondOperand = '';
                display.textContent = '0';
                return;
            }

            if (buttonValue === '=') {
                if (firstOperand && operator && currentInput) {
                    secondOperand = currentInput;
                    currentInput = calculate(firstOperand, secondOperand, operator);
                    display.textContent = currentInput;
                    operator = '';
                    firstOperand = '';
                    secondOperand = '';
                }
                return;
            }

            if (button.dataset.op) {
                if (currentInput) {
                    firstOperand = currentInput;
                    operator = buttonValue;
                    currentInput = '';
                }
                return;
            }

            if (buttonValue === '.' && currentInput.includes('.')) {
                return;
            }

            currentInput += buttonValue;
            display.textContent = currentInput;
        });
    });

    function calculate(first, second, operator) {
        first = parseFloat(first);
        second = parseFloat(second);

        switch (operator) {
            case '+':
                return (first + second).toString();
            case '-':
                return (first - second).toString();
            case '*':
                return (first * second).toString();
            case '/':
                return (first / second).toString();
            default:
                return '0';
        }
    }
});
