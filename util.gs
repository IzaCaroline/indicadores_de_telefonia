function queryHasura(query){

  var query = {
    query: query
  }
  
  var headers = {
    'x-hasura-admin-secret': SECRET_HASURA
  }
  
  var option = {
    'method':'post',
    'contentType':'application/json',
    'headers': headers,
    'payload': JSON.stringify(query)
  }
  var result = UrlFetchApp.fetch(URL_HASURA,option);
  return result; 
}
