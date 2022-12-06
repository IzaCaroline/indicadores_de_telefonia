//REGISTRA OS RAMAIS
function getDataRecordAgents() {
  queryRecordAgents = `
    queryRecordAgents {
    registros_ramais {
      fila
      number
      firstname
      tipo
      secretary
    }
    }`;

  var data = JSON.parse(queryHasura(queryRecordAgents))

  var para = "";

  var sheetName = "RecordAgents";
  var spreadsheet = SpreadsheetApp.openById(IDSHEET);
  var sheet = spreadsheet.getSheetByName(sheetName);
  var dadosOld = sheet.getDataRange().getValues();
  var headers = API.buildAdvancedColumnIndexes(sheet, null , headers, true);
  
  if(dadosOld.length > 1){
    sheet.deleteRows(2, dadosOld.length-1);
  }

 var data = JSON.parse(queryHasura(queryRecordAgents))


  dados = [];
  data.data.registros_ramais.map((item)=>{
    dados.push(item);
    
  })

 API.insertMultipleRecords()

  Logger.log(API.insertMultipleRecords('1WuGy5nhgNXaWVRn3ffYWl8Ksj-6BoGSRr5hiluzyzs8',sheetName,dados));
}
