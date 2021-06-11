const pw = document.getElementById('pw');
const copy = document.getElementById('copy');
const lenEl = document.getElementById('len');
const upperEl = document.getElementById('upper');
const lowerEl = document.getElementById('lower');
const numberEl = document.getElementById('number');
const symbolEl = document.getElementById('symbol');
const generate = document.getElementById('generate');

const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+=';

var count = 0;
var len = 8;
var upper = false;
var lower = false;
var number = false;
var symbol = false;


function getLowerCase() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getUpperCase() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function getRandomFunc() {
    var funcArray = [];

    if (upper) funcArray.push(getUpperCase);
    if (lower) funcArray.push(getLowerCase);
    if (number) funcArray.push(getNumber);
    if (symbol) funcArray.push(getSymbol);

    if (!funcArray.length) return '';

    return funcArray[Math.floor(Math.random() * funcArray.length)]();
}

function genPassword(length) {
    var password = '';

    for (let i = 0; i < length; i++) {
        password += getRandomFunc();
    }

    // validate pw
    if ((upper && !password.split('').find(x => upperLetters.includes(x))) || 
        (lower && !password.split('').find(x => lowerLetters.includes(x))) ||
        (number && !password.split('').find(x => numbers.includes(x))) ||
        (symbol && !password.split('').find(x => symbols.includes(x))))
        {
            count++;
            console.log('re-invoke!', count)
            password = genPassword(length);
        }

    return password;
}

lenEl.addEventListener('change', () => {
    len = lenEl.value;
    if (len < 4) len = 4;
    if (len > 40) len = 40;
})

upperEl.addEventListener('change', () => {
    upper = upperEl.checked;
})

lowerEl.addEventListener('change', () => {
    lower = lowerEl.checked;
})

numberEl.addEventListener('change', () => {
    number = numberEl.checked;
})

symbolEl.addEventListener('change', () => {
    symbol = symbolEl.checked;
})

generate.addEventListener('click', () => {
    pw.innerHTML = genPassword(len);
})

copy.addEventListener('click', () => {
    const copyText = document.createElement('textarea');
    const password = pw.innerText;

    if (!password) return;

    copyText.value = password;

    document.body.appendChild(copyText);

    copyText.select();
    document.execCommand("copy");
    alert('Copied password to clipboard!')
    copyText.remove();
})