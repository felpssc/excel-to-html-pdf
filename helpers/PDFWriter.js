const HtmlPDF = require('html-pdf');

class PDFWriter {
  async writePDF(filename, html) {
    HtmlPDF.create(html).toFile(filename, (err) => {
      if (err) {
        throw err;
      }
    })
  }
}

module.exports = new PDFWriter();