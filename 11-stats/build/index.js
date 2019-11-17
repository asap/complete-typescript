"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
// import { CsvFileReader } from './CsvFileReader';
// import { ConsoleReport } from './reportTartgets/ConsoleReport';
// import { HtmlReport } from './reportTartgets/HtmlReport';
// import { WinsAnalysis } from './analyzers/WinsAnalysis';
var Summary_1 = require("./Summary");
// const csvFileReader = new CsvFileReader('./football.csv');
var matchReader = MatchReader_1.MatchReader.fromCsv('./football.csv');
// const matchReader = new MatchReader(csvFileReader);
matchReader.load();
// const reader = new MatchReader('./football.csv');
// reader.read();
// const summary = new Summary(
//   new WinsAnalysis('Man United'),
//   new ConsoleReport()
//   // new HtmlReport()
// );
var summary = Summary_1.Summary.winsAnalysisWithHtmlReport('Man United');
summary.buildAndPrintReport(matchReader.matches);
