const inputAmount = document.querySelector('.currency-converter__input-oamount');
const inputFromCurrency = document.querySelector('.currency-converter__input-from');
const inputToCurrency = document.querySelector('.currency-converter__input-to');
const btnConvert = document.querySelector('.currency-converter__btn--convert');
const btnReset = document.querySelector('.currency-converter__btn--reset');
const finalAmount = document.querySelector('.currency-converter__final-amount');
let fromValue, toValue, inputValue;

const api = "https://api.exchangerate-api.com/v4/latest/USD";

inputFromCurrency.addEventListener('change', function(e) {
    fromValue = `${e.target.value}`;
});

inputToCurrency.addEventListener('change', function(e) {
    toValue = `${e.target.value}`;
});

inputAmount.addEventListener('input', function(e) {
    inputValue = `${e.target.value}`;
});

btnConvert.addEventListener('click', function(e) {
    console.log(fromValue);
    console.log(toValue);
    console.log(inputValue);
    fetch(`${api}`)
        .then(currency => {
            console.log(currency);
            return currency.json();
        })
        .then(displayResults);
});

function displayResults(currency) {
    let fromRate = currency.rates[inputFromCurrency];
    let toRate = currency.rates[inputToCurrency];
    finalAmount.innerHTML = ((toRate / fromRate) * inputValue).toFixed(2);
    finalAmount.style.display = 'block';
}