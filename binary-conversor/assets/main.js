import BinaryConverter from './Converter/BinaryConverter.js';
import DecimalConverter from './Converter/DecimalConverter.js';

const init = () => {
  const h3Binary = document.createElement('h3');
  const h3Decimal = document.createElement('h3');
  const containerBinary = document.querySelector('#Binary');
  const containerDecimal = document.querySelector('#Decimal');
  containerBinary.append(h3Binary);
  containerDecimal.append(h3Decimal);
  const buttonBinary = document.querySelector('#convert-decimal-binary');
  const buttonDecimal = document.querySelector('#convert-binary-decimal');
  listen(buttonBinary, buttonDecimal, h3Binary, h3Decimal);
};

function listen(buttonBinary, buttonDecimal, h3Binary, h3Decimal) {
  buttonBinary.addEventListener('click', () => handleButtonBinary(h3Binary));
  buttonDecimal.addEventListener('click', () => handleButtonDecimal(h3Decimal));
}

const handleButtonBinary = (h3Binary) => {
  const input = document.querySelector('#decimal-input');
  try {
    const converter = new BinaryConverter(input.value);
    const result = converter.convert();
    h3Binary.innerHTML = result;
  } catch (e) {
    input.value = '';
    h3Binary.innerHTML = e.message;
  }
};

const handleButtonDecimal = (h3Decimal) => {
  const input = document.querySelector('#binary-input');
  try {
    const converter = new DecimalConverter(input.value);
    const result = converter.convert();
    h3Decimal.innerHTML = result;
  } catch (e) {
    input.value = '';
    h3Decimal.innerHTML = e.message;
  }
};

document.addEventListener('DOMContentLoaded', init);
