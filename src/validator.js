const validator = {
  isValid(creditCardNumber) {
    let resultado = creditCardNumber.split("").map(Number);

    resultado = resultado.reverse();

    let element = 1;
    while (element < resultado.length) {
      resultado[element] = resultado[element] * 2;
      if (resultado[element] > 9) {
        resultado[element] = resultado[element] - 9;
      }
      element = element + 2;
    }

    let sum = 0;
    for (element = 0; element < resultado.length; element++) {
      sum = sum + resultado[element];
    }

    return sum % 10 === 0;
  },

  maskify(creditCardNumber) {
    const cardLength = creditCardNumber.length;
    let mask = creditCardNumber.substring(0, cardLength - 4);
    mask = mask.replace(/./g, "#");

    const text = creditCardNumber.substring(cardLength - 4);
    return mask + text;
  },
};

export default validator;
