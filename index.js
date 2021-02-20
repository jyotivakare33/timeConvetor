const dropdown = document.querySelector('.unit-values');
const inputValue = document.querySelector('.input-value');
const kilometer = document.querySelector('.kilometer');
const meter = document.querySelector('.meter');
const centimeter = document.querySelector('.centimeter');
const millimeter = document.querySelector('.millimeter');
const feet = document.querySelector('.feet');
const yard = document.querySelector('.yard');
const inches = document.querySelector('.inches');

dropdown.addEventListener('change', () => {
    if (inputValue.value !== '') {
        if (dropdown.value === 'meter') {
            kilometer.innerHTML = inputValue.value / 1000;
            meter.innerHTML = inputValue.value;
            centimeter.innerHTML = inputValue.value * 100;
            millimeter.innerHTML = inputValue.value * 1000;
            feet.innerHTML = inputValue.value * 3.281;
            yard.innerHTML = inputValue.value * 1.094;
            inches.innerHTML = inputValue.value * 39.37;
        } else if (dropdown.value === 'centimeter') {
            kilometer.innerHTML = inputValue.value / 100000;
            meter.innerHTML = inputValue.value / 100;
            centimeter.innerHTML = inputValue.value;
            millimeter.innerHTML = inputValue.value * 10;
            feet.innerHTML = inputValue.value / 30.48;
            yard.innerHTML = inputValue.value / 91.44;
            inches.innerHTML = inputValue.value / 2.54;
        } else if (dropdown.value === 'millimeter') {
            kilometer.innerHTML = inputValue.value / 1000000;
            meter.innerHTML = inputValue.value / 1000;
            centimeter.innerHTML = inputValue.value / 10;
            millimeter.innerHTML = inputValue.value;
            feet.innerHTML = inputValue.value / 305;
            yard.innerHTML = inputValue.value / 914;
            inches.innerHTML = inputValue.value / 25.4;
        } else if (dropdown.value === 'feet') {
            kilometer.innerHTML = inputValue.value / 3281;
            meter.innerHTML = inputValue.value / 3.281;
            centimeter.innerHTML = inputValue.value * 30.48;
            millimeter.innerHTML = inputValue.value * 305;
            feet.innerHTML = inputValue.value;
            yard.innerHTML = inputValue.value / 3;
            inches.innerHTML = inputValue.value / 12;
        } else if (dropdown.value === 'yard') {
            kilometer.innerHTML = inputValue.value / 1094;
            meter.innerHTML = inputValue.value / 1.094;
            centimeter.innerHTML = inputValue.value * 91.44;
            millimeter.innerHTML = inputValue.value * 914;
            feet.innerHTML = inputValue.value * 3;
            yard.innerHTML = inputValue.value;
            inches.innerHTML = inputValue.value * 36;
        } else if (dropdown.value === 'inches') {
            kilometer.innerHTML = inputValue.value * 39370;
            meter.innerHTML = inputValue.value * 39.37;
            centimeter.innerHTML = inputValue.value / 2.54;
            millimeter.innerHTML = inputValue.value / 25.4;
            feet.innerHTML = inputValue.value / 12;
            yard.innerHTML = inputValue.value / 36;
            inches.innerHTML = inputValue.value;
        } else if (dropdown.value === 'kilometer') {
            kilometer.innerHTML = inputValue.value;
            meter.innerHTML = inputValue.value / 1000;
            centimeter.innerHTML = inputValue.value / 100;
            millimeter.innerHTML = inputValue.value / 10;
            feet.innerHTML = inputValue.value * 3281;
            yard.innerHTML = inputValue.value * 1094;
            inches.innerHTML = inputValue.value * 39370;
        }
    }
});
