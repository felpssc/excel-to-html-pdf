class Processor {
  process(data) {
    const rows = data.split('\r\n');

    rows.forEach((row, index) => {
      const cells = row.split(',');

      rows[index] = cells;
    });

    return rows;
  }
}

module.exports = new Processor();