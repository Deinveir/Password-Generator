const pwEl = document.querySelector('.pw');
const copyEl = document.querySelector('.copy');
const lenEl = document.querySelector('#len');
const upperEl = document.querySelector('#upper');
const lowerEl = document.querySelector('#lower');
const numberEl = document.querySelector('#number');
const symbolsEl = document.querySelector('#symbols');
const generateEl = document.querySelector('.generate');

const upLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '123456789';
const symbols = '!@#$%^&*()_=+-';

const lenMax = lenEl.max;
const lenMin = lenEl.min;

function getUpper() {
    // Return random component of the upLetters variable
    return upLetters[Math.floor(Math.random() * upLetters.length)];
}

function getLower () {
    return lowLetters[Math.floor(Math.random() * lowLetters.length)];
}

function getNumber () {
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol () {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword(){
    let len = lenEl.value;

    let password = '';
    
    if (len >= parseInt(lenMax)){
        for (let i=0; i <= lenMax-1 ; i++) {
            const x = generateX();
                password += x;
        }
    }
    else if (len <= parseInt(lenMin)){
        for (let i=0; i <= lenMin-1 ; i++) {
            const x = generateX();
                password += x;
        }
    }
    else {
        for (let i=0; i <= len-1; i++){
            const x = generateX();
                password += x;
        }
    }

    pwEl.innerText = password;
    copyEl.innerText = 'Copy to clipboard';
}

function generateX() {
    const xs = [];
    if (upperEl.checked){
        xs.push(getUpper());
    }else{
        xs.pop;
    }
    if (lowerEl.checked){
        xs.push(getLower());
    }else{
        xs.pop;
    }
    if (numberEl.checked){
        xs.push(getNumber());
    }else{
        xs.pop;    }
    if (symbolsEl.checked){
        xs.push(getSymbol());
    }else{
        xs.pop;    }
    if (xs.length === 0) return '';

    return xs[Math.floor(Math.random() * xs.length)];
}

generateEl.addEventListener('click', () => {   
    generatePassword();
});

copyEl.addEventListener('click', () => {
    navigator.clipboard.writeText(pwEl.innerText);
    copyEl.innerText = 'Copied';
    pwEl.innerText = '';
});