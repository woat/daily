let calculator = {
  x:  null,
  y: null,
  read() {
    this.x = prompt('First Number?');
    this.y = prompt('Second Number?');
  },
  sum() {
    return this.x + this.y;
  },
  multiply() {
    return this.x * this.y;
  }
}
