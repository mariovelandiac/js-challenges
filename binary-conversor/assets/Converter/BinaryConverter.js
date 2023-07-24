class BinaryConverter {
  constructor(input) {
    this.input = input;
    this.validateInput();
  }

  validateInput() {
    if (typeof parseInt(this.input) != "number" || this.input < 0) {
      throw new Error("Invalid Input");
    }
  }

  convert() {
    return parseInt(this.input).toString(2);
  }
}

export default BinaryConverter;