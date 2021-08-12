const ejs = require('ejs');

class HtmlParser {

  static async parse(table){
    return await ejs.renderFile('./templates/table.ejs', { table });
  }

}

module.exports = HtmlParser;