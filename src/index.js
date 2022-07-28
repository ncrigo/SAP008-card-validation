import validator from './validator.js';

let b = window.document.getElementById('button');
b.addEventListener('click', clicar);

function clicar() {
    let creditCardNumber = window.document.getElementById('numberInput');

    let validou = validator.isValid(creditCardNumber);

    let label = window.document.getElementById('numberInputLabel');

    if (validou) {
        creditCardNumber.style.border = '2px solid green'
        creditCardNumber.value = validator.maskify(creditCardNumber);
        label.innerText = 'Parabéns, pedido efetuado com sucesso!';
        label.style.color = 'green';
        label.style.fontWeight = 'bold';

    } else {
        creditCardNumber.style.border = '2px solid red';
        label.innerText = 'Número inválido, tente outro cartão!';
        label.style.color = 'red';
        label.style.fontWeight = 'normal';
    }

    console.log(validou);
}

let d = window.document.getElementById('expiryInput');
d.addEventListener('keypress', maskExpiry);

function maskExpiry() {
    let date = '';
    date = date + d.value;
    if (date.length == 2) {
        date = date + '/';
        d.value = date;
    }
}
