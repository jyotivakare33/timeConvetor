const dropdown = document.querySelector('.unit-values');
const inputValue = document.querySelector('.input-value');
const kilogram = document.querySelector('.kilogram');
const gram = document.querySelector('.gram');
const ounce = document.querySelector('.ounce');
const pounds = document.querySelector('.pounds');

dropdown.addEventListener('change', () => {
    if (inputValue.value !== '') {
        if (dropdown.value === 'gram') {
            kilogram.innerHTML = inputValue.value / 1000;
            gram.innerHTML = inputValue.value;
            ounce.innerHTML = inputValue.value / 28.35;
            pounds.innerHTML = inputValue.value / 454;
        } else if (dropdown.value === 'ounce') {
            kilogram.innerHTML = inputValue.value / 35.274;
            gram.innerHTML = inputValue.value * 28.35;
            ounce.innerHTML = inputValue.value;
            pounds.innerHTML = inputValue.value / 16;
        } else if (dropdown.value === 'kilogram') {
            kilogram.innerHTML = inputValue.value;
            gram.innerHTML = inputValue.value * 1000;
            ounce.innerHTML = inputValue.value * 35.274;
            pounds.innerHTML = inputValue.value * 2.205;
        } else if (dropdown.value === 'pounds') {
            kilogram.innerHTML = inputValue.value / 2.205;
            gram.innerHTML = inputValue.value * 454;
            ounce.innerHTML = inputValue.value * 16;
            pounds.innerHTML = inputValue.value;
        }
    }
});
