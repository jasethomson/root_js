function myMessage(){
  console.log('my function works!!!');
}
function add(num1, num2){
  var result = num1 + num2;
  console.log("add function result: " + num1 + ' + ' + num2 + ' = ' + result)
}
function addWithReturn(num3, num4){
  var result2 = num3 + num4;
  return result2;
}
var addWithReturnResult = addWithReturn(10, 20);

function cardFlip(clickedElement){
  $(clickedElement).hide();
}
