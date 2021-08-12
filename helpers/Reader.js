const fs = require('fs');
const util = require('util');

class Reader {

  constructor() {
    this.reader = util.promisify(fs.readFile);
  }
  
  async read(filepath, encoding) {
    try {
      return await this.reader(filepath, encoding);
    } catch (err) {
      throw err;
    }
  }
} 

module.exports = new Reader();