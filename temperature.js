const dropdown = document.querySelector('.unit-values');
const inputValue = document.querySelector('.input-value');
const celsius = document.querySelector('.celsius');
const kelvin = document.querySelector('.kelvin');
const fahrenheit = document.querySelector('.fahrenheit');

dropdown.addEventListener('change', () => {
    if (inputValue.value !== '') {
        if (dropdown.value === 'kelvin') {
            celsius.innerHTML = inputValue.value - 273.15;
            kelvin.innerHTML = inputValue.value;
            fahrenheit.innerHTML = ((inputValue.value - 273.15) * 9) / 5 + 32;
        } else if (dropdown.value === 'fahrenheit') {
            celsius.innerHTML = (inputValue.value - 30) / 2;
            kelvin.innerHTML = (inputValue.value + 459.67) * (5 / 9);
            fahrenheit.innerHTML = inputValue.value;
        } else if (dropdown.value === 'celsius') {
            celsius.innerHTML = inputValue.value;
            kelvin.innerHTML = inputValue.value + 273.15;
            fahrenheit.innerHTML = inputValue.value * (9 / 5) + 32;
        }
    }
});
