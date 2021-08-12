const Reader = require('./helpers/Reader');
const Processor = require('./helpers/Processor');
const Table = require('./helpers/Table');
const HtmlParser = require('./helpers/HtmlParser');
const Writer = require('./helpers/Writer');
const PDFWriter = require('./helpers/PDFWriter');

(async () => {
  const content = await Reader.reader('./report.csv', 'utf-8');
  
  const data = Processor.process(content);
  
  const tableContent = new Table(data);

  const htmlContent = await HtmlParser.parse(tableContent);

  Writer.write(`./output/${Date.now()}.html`, htmlContent);

  PDFWriter.writePDF(`./output/${Date.now()}.pdf`, htmlContent);

})();