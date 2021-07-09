export default class ArrayBufferConverter {
  load(buffer) {
    this.value = buffer;
  }

  toString() {
    const v = new Uint16Array(this.value);
    return String.fromCharCode(...v);
  }
}
