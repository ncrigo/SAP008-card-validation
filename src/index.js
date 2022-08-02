import validator from './validator.js';

let creditCardNumber = window.document.getElementById('numberInput');

creditCardNumber.addEventListener('keypress', justNumber);

function justNumber(eventNumber) {
    const keyCode = eventNumber.keyCode;
    if (keyCode < 47 || keyCode > 58) {
        eventNumber.preventDefault();
    }
}



let expiry = window.document.getElementById('expiryInput');
expiry.addEventListener('keypress', maskExpiry);

function maskExpiry() {
    let date = '';
    date = date + expiry.value;
    if (date.length == 2) {
        date = date + '/';
        expiry.value = date;
    }
}

expiry.addEventListener('keypress', justNumber);



let name = window.document.getElementById('nameInput');

name.addEventListener('keypress', blockNumber);

function blockNumber(eventName) {
    const keyCode = eventName.keyCode;
    if (keyCode > 33 && keyCode < 64) {
        eventName.preventDefault();
    }
}



let b = window.document.getElementById('button');
b.addEventListener('click', clicar);

function clicar() {

    let validou = validator.isValid(creditCardNumber.value);

    let label = window.document.getElementById('numberInputLabel');

    if (validou) {
        creditCardNumber.style.border = '2px solid green'
        creditCardNumber.value = validator.maskify(creditCardNumber.value);
        label.innerText = 'Parabéns, pedido efetuado com sucesso!';
        label.style.color = 'green';
        label.style.fontWeight = 'bold';

    } else {
        creditCardNumber.style.border = '2px solid red';
        label.innerText = 'Número inválido, tente outro cartão!';
        label.style.color = 'red';
        label.style.fontWeight = 'normal';
    }
}