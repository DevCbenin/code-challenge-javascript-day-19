class Series {
  constructor(str) {
    this.digits = str.match(/\d/g).map(d => Number.parseInt(d, 10));
  }

  slices(n) {
    if (n > this.digits.length) throw new Error('Slice size is too big.');
    const result = [];
    for (let i = 0; i <= this.digits.length - n; i++) {
      result.push(this.digits.slice(i, i + n));
    }
    return result;
  }
}
  module.exports = Series;