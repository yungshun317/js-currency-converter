const inputAmount = document.querySelector('.currency-converter__input-oamount');
const inputFromCurrency = document.querySelector('.currency-converter__input-from');
const inputToCurrency = document.querySelector('.currency-converter__input-to');
const btnConvert = document.querySelector('.currency-converter__btn--convert');
const btnReset = document.querySelector('.currency-converter__btn--reset');
const finalAmount = document.querySelector('.currency-converter__final-amount');
let fromCurrencyValue, toCurrencyValue, inputAmountValue;

const api = "https://api.exchangerate-api.com/v4/latest/USD";

inputFromCurrency.addEventListener('change', function(e) {
    fromCurrencyValue = `${e.target.value}`;
});

inputToCurrency.addEventListener('change', function(e) {
    toCurrencyValue = `${e.target.value}`;
});

inputAmount.addEventListener('input', function(e) {
    inputAmountValue = `${e.target.value}`;
});

btnConvert.addEventListener('click', function(e) {
    console.log(fromCurrencyValue);
    console.log(toCurrencyValue);
    console.log(inputAmountValue);
    fetch(`${api}`)
        .then(currency => {
            console.log(currency);
            return currency.json();
        })
        .then(displayResults);
});

function displayResults(currency) {
    let fromCurrencyRate = currency.rates[fromCurrencyValue];
    console.log(fromCurrencyRate);
    let toCurrencyRate = currency.rates[toCurrencyValue];
    console.log(toCurrencyRate);
    finalAmount.innerHTML = ((toCurrencyRate / fromCurrencyRate) * inputAmountValue).toFixed(2);
    finalAmount.style.display = 'block';
}

function clearValue() {
    window.location.reload();
    document.getElementsByClassName('currency-converter__final-amount').innerHTML = "";
}