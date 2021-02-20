const dropdown = document.querySelector('.unit-values');
const inputValue = document.querySelector('.input-value');
const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const seconds = document.querySelector('.seconds');
const milliseconds = document.querySelector('.milliseconds');
const microseconds = document.querySelector('.microseconds');
const nanoseconds = document.querySelector('.nanoseconds');
const day = document.querySelector('.day');
const month = document.querySelector('.month');
const year = document.querySelector('.year');

dropdown.addEventListener('change', () => {
    if (inputValue.value !== '') {
        if (dropdown.value === 'minute') {
            hour.innerHTML = inputValue.value / 60;
            minute.innerHTML = inputValue.value;
            seconds.innerHTML = inputValue.value * 60;
            milliseconds.innerHTML = inputValue.value * 60000;
            microseconds.innerHTML = inputValue.value * 60000000;
            nanoseconds.innerHTML = inputValue.value * 60000000000;
            day.innerHTML = inputValue.value / 1440;
            month.innerHTML = inputValue.value / 43800;
            year.innerHTML = inputValue.value / 525600;
        } else if (dropdown.value === 'seconds') {
            hour.innerHTML = inputValue.value / 3600;
            minute.innerHTML = inputValue.value / 60;
            seconds.innerHTML = inputValue.value;
            milliseconds.innerHTML = inputValue.value * 1000;
            microseconds.innerHTML = inputValue.value * 1000000;
            nanoseconds.innerHTML = inputValue.value * 1000000000;
            day.innerHTML = inputValue.value / 86400;
            month.innerHTML = inputValue.value / 3.80518;
            year.innerHTML = inputValue.value / 3.171;
        } else if (dropdown.value === 'milliseconds') {
            hour.innerHTML = inputValue.value / 3.6;
            minute.innerHTML = inputValue.value / 60000;
            seconds.innerHTML = inputValue.value / 1000;
            milliseconds.innerHTML = inputValue.value;
            microseconds.innerHTML = inputValue.value * 1000;
            nanoseconds.innerHTML = inputValue.value * 1000000;
            day.innerHTML = inputValue.value / 8.64;
            month.innerHTML = inputValue.value / 2.628;
            year.innerHTML = inputValue.value / 3.154;
        } else if (dropdown.value === 'microseconds') {
            hour.innerHTML = inputValue.value / 3.6;
            minute.innerHTML = inputValue.value / 60000000;
            seconds.innerHTML = inputValue.value / 1000000;
            milliseconds.innerHTML = inputValue.value / 1000;
            microseconds.innerHTML = inputValue.value;
            nanoseconds.innerHTML = inputValue.value * 1000;
            day.innerHTML = inputValue.value / 8.64;
            month.innerHTML = inputValue.value / 2.628;
            year.innerHTML = inputValue.value / 3.154;
        } else if (dropdown.value === 'nanoseconds') {
            hour.innerHTML = inputValue.value / 3.6;
            minute.innerHTML = inputValue.value / 6000000;
            seconds.innerHTML = inputValue.value / 3.6;
            milliseconds.innerHTML = inputValue.value / 1000000;
            microseconds.innerHTML = inputValue.value / 1000;
            nanoseconds.innerHTML = inputValue.value;
            day.innerHTML = inputValue.value / 8.64;
            month.innerHTML = inputValue.value / 2.628;
            year.innerHTML = inputValue.value / 3.154;
        } else if (dropdown.value === 'day') {
            hour.innerHTML = inputValue.value * 86400;
            minute.innerHTML = inputValue.value * 1440;
            seconds.innerHTML = inputValue.value * 86400;
            milliseconds.innerHTML = inputValue.value * 8.64;
            microseconds.innerHTML = inputValue.value * 8.64;
            nanoseconds.innerHTML = inputValue.value * 8.64;
            day.innerHTML = inputValue.value;
            month.innerHTML = inputValue.value / 30.417;
            year.innerHTML = inputValue.value / 365;
        } else if (dropdown.value === 'hour') {
            hour.innerHTML = inputValue.value;
            minute.innerHTML = inputValue.value * 60;
            seconds.innerHTML = inputValue.value * 3600;
            milliseconds.innerHTML = inputValue.value * 3600000;
            microseconds.innerHTML = inputValue.value * 3600000000;
            nanoseconds.innerHTML = inputValue.value * 3600000000000;
            day.innerHTML = inputValue.value * 0.041666667;
            month.innerHTML = inputValue.value * 0.0013689535;
            year.innerHTML = inputValue.value * 0.00011407946;
        } else if (dropdown.value === 'month') {
            hour.innerHTML = inputValue.value * 730;
            minute.innerHTML = inputValue.value * 43800;
            seconds.innerHTML = inputValue.value * 2.628;
            milliseconds.innerHTML = inputValue.value * 2.628;
            microseconds.innerHTML = inputValue.value * 2.628;
            nanoseconds.innerHTML = inputValue.value * 2.628;
            day.innerHTML = inputValue.value * 30.417;
            month.innerHTML = inputValue.value;
            year.innerHTML = inputValue.value / 12;
        } else if (dropdown.value === 'year') {
            hour.innerHTML = inputValue.value * 8760;
            minute.innerHTML = inputValue.value * 525600;
            seconds.innerHTML = inputValue.value * 3.154;
            milliseconds.innerHTML = inputValue.value * 3.154;
            microseconds.innerHTML = inputValue.value * 3.154;
            nanoseconds.innerHTML = inputValue.value * 3.154;
            day.innerHTML = inputValue.value * 365;
            month.innerHTML = inputValue.value * 12;
            year.innerHTML = inputValue.value;
        }
    }
});
