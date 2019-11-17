import { MatchReader } from './MatchReader';
// import { CsvFileReader } from './CsvFileReader';
// import { ConsoleReport } from './reportTartgets/ConsoleReport';
// import { HtmlReport } from './reportTartgets/HtmlReport';
// import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';

// const csvFileReader = new CsvFileReader('./football.csv');

const matchReader = MatchReader.fromCsv('./football.csv');
// const matchReader = new MatchReader(csvFileReader);
matchReader.load();

// const reader = new MatchReader('./football.csv');
// reader.read();

// const summary = new Summary(
//   new WinsAnalysis('Man United'),
//   new ConsoleReport()
//   // new HtmlReport()
// );

const summary = Summary.winsAnalysisWithHtmlReport('Man United');

summary.buildAndPrintReport(matchReader.matches);
