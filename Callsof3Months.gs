//REGISTRA AS LIGAÇÕES DE 3MESES DOS TIPOS  ATENDIDAS E NÃO ATENDIDAS (ENTRANTE E SAÍDA)
function getDataCallsof3Months() {
  queryCallsof3Months = `
    queryCallsof3Months {
    a_cenario_90dias {
      agent
      entranteatendidas
      entrantenaoatendidas
      saidaatendidas
      saidanaoatendidas
      duration
    }
    }`;

  var data = JSON.parse(queryHasura(queryCallsof3Months))

  var para = "";

  var sheetName = "Callsof3Months";
  var spreadsheet = SpreadsheetApp.openById(IDSHEET);
  var sheet = spreadsheet.getSheetByName(sheetName);
  var dadosOld = sheet.getDataRange().getValues();
  var headers = API.buildAdvancedColumnIndexes(sheet, null , headers, true);
  
  if(dadosOld.length > 1){
    sheet.deleteRows(2, dadosOld.length-1);
  }

 var data = JSON.parse(queryHasura(queryCallsof3Months))


  dados = [];
  data.data.a_cenario_90dias.map((item)=>{
    dados.push(item);
    
  })

 API.insertMultipleRecords()

  Logger.log(API.insertMultipleRecords('1WuGy5nhgNXaWVRn3ffYWl8Ksj-6BoGSRr5hiluzyzs8',sheetName,dados));
}
