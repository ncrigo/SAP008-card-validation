import validator from "./validator.js";

const ASCII_CODE_0 = 48;
const ASCII_CODE_9 = 57;
const ASCII_CODE_EXCLAMATION = 33;
const ASCII_CODE_ARROBA = 64;

const creditCardNumber = window.document.getElementById("numberInput");
const expiry = window.document.getElementById("expiryInput");
const name = window.document.getElementById("nameInput");
const button = window.document.getElementById("button");
const label = window.document.getElementById("numberInputLabel");

creditCardNumber.addEventListener("keypress", justNumber);
expiry.addEventListener("keypress", maskExpiry);
expiry.addEventListener("keypress", justNumber);
name.addEventListener("keypress", blockNumber);
button.addEventListener("click", clicar);

function justNumber(eventNumber) {
  const keyCode = eventNumber.keyCode;
  if (keyCode < ASCII_CODE_0 || keyCode > ASCII_CODE_9) {
    eventNumber.preventDefault();
  }
}

function maskExpiry() {
  let date = "";
  date = date + expiry.value;
  if (date.length == 2) {
    date = date + "/";
    expiry.value = date;
  }
}

function blockNumber(eventName) {
  const keyCode = eventName.keyCode;
  if (keyCode > ASCII_CODE_EXCLAMATION && keyCode < ASCII_CODE_ARROBA) {
    eventName.preventDefault();
  }
}

function clicar() {
  const validou = validator.isValid(creditCardNumber.value);

  if (validou) {
    creditCardNumber.style.border = "2px solid green";
    creditCardNumber.value = validator.maskify(creditCardNumber.value);
    label.innerText = "Parabéns, pedido efetuado com sucesso!";
    label.style.color = "green";
    label.style.fontWeight = "bold";
  } else {
    creditCardNumber.style.border = "2px solid red";
    label.innerText = "Número inválido, tente outro cartão!";
    label.style.color = "red";
    label.style.fontWeight = "normal";
  }
}
