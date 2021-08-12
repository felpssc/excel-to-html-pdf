const Reader = require('./helpers/Reader');
const Processor = require('./helpers/Processor');
const Table = require('./helpers/Table');
const HtmlParser = require('./helpers/HtmlParser');


(async () => {
  const content = await Reader.reader('./report.csv', 'utf-8');
  
  const data = Processor.process(content);
  
  const tableContent = new Table(data);

  const htmlContent = await HtmlParser.parse(tableContent);

})();