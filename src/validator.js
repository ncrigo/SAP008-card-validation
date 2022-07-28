const validator = {

  isValid(creditCardNumber) {

    let resultado = creditCardNumber.value.split('').map(Number);

    resultado = resultado.reverse()

    resultado[1] = resultado[1] * 2;
    resultado[3] = resultado[3] * 2;
    resultado[5] = resultado[5] * 2;
    resultado[7] = resultado[7] * 2;
    resultado[9] = resultado[9] * 2;
    resultado[11] = resultado[11] * 2;
    resultado[13] = resultado[13] * 2;
    resultado[15] = resultado[15] * 2;

    if (resultado[1] > 9) {
      resultado[1] = resultado[1] - 9
    }

    if (resultado[3] > 9) {
      resultado[3] = resultado[3] - 9
    }

    if (resultado[5] > 9) {
      resultado[5] = resultado[5] - 9
    }

    if (resultado[7] > 9) {
      resultado[7] = resultado[7] - 9
    }

    if (resultado[9] > 9) {
      resultado[9] = resultado[9] - 9
    }

    if (resultado[11] > 9) {
      resultado[11] = resultado[11] - 9
    }

    if (resultado[13] > 9) {
      resultado[13] = resultado[13] - 9
    }

    if (resultado[15] > 9) {
      resultado[15] = resultado[15] - 9
    }

    let sum = resultado[0] + resultado[1] + resultado[2] + resultado[3] + resultado[4] + resultado[5] + resultado[6] + resultado[7] + resultado[8] + resultado[9] + resultado[10] + resultado[11] + resultado[12] + resultado[13] + resultado[14] + resultado[15];

    if (sum % 10 === 0) {
      return true;
    }
    else {
      return false;
    }
  },

  maskify(creditCardNumber) {
    let cardLength = creditCardNumber.value.length;
    let mask = creditCardNumber.value.substring(0, cardLength - 4);
    mask = mask.replace(/./g, '#');

    let text = creditCardNumber.value.substring(cardLength - 4);
    let newCard = mask + text;
    return newCard;
  }
};

export default validator;

