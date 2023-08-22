const inputAmount = document.querySelector('.currency-converter__input-oamount');
const fromCurrency = document.querySelector('.currency-converter__input-from');
const toCurrency = document.querySelector('.currency-converter__input-to');
let fromValue, toValue, inputValue;

fromCurrency.addEventListener('change', function(e) {
    fromValue = `${e.target.value}`;
});

toCurrency.addEventListener('change', function(e) {
    toValue = `${e.target.value}`;
});

inputAmount.addEventListener('input', function(e) {
    inputValue = `${e.target.value}`;
});