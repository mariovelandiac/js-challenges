class DecimalConverter {
  constructor(input) {
    this.input = input;
    this.validateInput();
  }

  validateInput() {
    const regex = /^[01]+$/;
    const isBinary = regex.test(this.input);
    if (!isBinary) {
      throw new Error("Invalid Input");
    }
  }

  convert() {
    return parseInt(this.input, 2);
  }
}

export default DecimalConverter;
