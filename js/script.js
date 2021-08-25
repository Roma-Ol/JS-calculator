'use strict';
let wrapper = document.querySelector('.inputs'),
    firstElement = document.querySelector('.inputs').firstElementChild,
    firstElementValue,
    secondElement = document.querySelector('.inputs').lastElementChild,
    secondElementValue,
    button = document.querySelector('.getResult'),
    result = document.querySelector('.result');

button.addEventListener('click', () => {



    if (firstElement.value !== '' && secondElement.value !== '') {

        let firstElementValue = Number(firstElement.value),
            secondElementValue = Number(secondElement.value),
            operator = document.querySelector('input[name=selector]:checked'),
            reg = new RegExp('^[0-9]+$');

        let count = function (a, b) {
            if (operator.value === '+') {
                return a + b;
            } else if (operator.value === '-') {
                return a - b;
            } else if (operator.value === '*') {
                return a * b;
            } else if (operator.value === '/') {
                return a / b;
            }
        };

        result.innerHTML = (count(firstElementValue, secondElementValue));

        const resetButton = document.createElement('button');
        resetButton.classList.add('resetButton');
        resetButton.innerHTML = 'Reset';
        resetButton.addEventListener('click', ()=> {
            firstElement.value = '';
            secondElement.value = '';
            result.innerHTML = '';
            resetButton.remove();
        });
        document.body.append(resetButton);        
    } else {
        result.innerHTML = ('Please fill all the fields');
    }

});