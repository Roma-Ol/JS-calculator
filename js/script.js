'use strict';

let wrapper = document.querySelector('.inputs'),
    firstElement = document.querySelector('.inputs').firstElementChild,
    firstElementValue,
    secondElement = document.querySelector('.inputs').lastElementChild,
    secondElementValue,
    button = document.querySelector('.getResult'),
    addOne = document.querySelector('.addOne'),
    removeOne = document.querySelector('.removeOne'),
    result = document.querySelector('.result');



button.addEventListener('click', () => {
    firstElementValue = Number(firstElement.value);
    secondElementValue = Number(secondElement.value);
    const operator = document.querySelector('input[name=selector]:checked').value;
    result.innerHTML = (sum(firstElementValue, secondElementValue));
    console.log(operator);

    function sum(a, b) {
        if (operator === '+') {
            return a + b;
        } else if (operator === '-') {
            return a - b;
        } else if (operator === '*') {
            return a * b;
        } else if (operator === '/') {
            return a / b;
        }
    }
});

addOne.addEventListener('click', () => {
    firstElement.value++;
})
removeOne.addEventListener('click', () => {
    firstElement.value--;
})