function callba(n) {
  console.log('Hello ' + n);
}
                                                                                                                                                                                               
function processUserInput(callbac) {
  var name = 'AP';
  //console.log('bye ' + name )
  
  callbac(name);
  
}

processUserInput(callba);
