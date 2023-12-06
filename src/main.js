document.addEventListener('DOMContentLoaded', function () {
    const display = document.querySelector('.display');
    const buttons = document.querySelectorAll('.buttons button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonText = button.textContent;

            switch (buttonText) {
                case 'AC':
                    display.value = '';
                    break;
                case 'DEL':
                    display.value = display.value.slice(0, -1);
                    break;
                case '=':
                    try {
                        display.value = eval(display.value);
                    } catch (error) {
                        display.value = 'Error';
                    }
                    break;
                default:
                    display.value += buttonText;
                    break;
            }
        });
    });
});