class Table {
  constructor(arr) {
    this.header = arr[0];
    arr.shift();
    this.rows = arr;
  }

  getRowsCount() {
    return this.rows.length;
  }

  getColumnsCount() {
    return this.header.length;
  }
}

module.exports = Table;