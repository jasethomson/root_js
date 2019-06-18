var numbers = [1,2,3,4,5,6,7,8,9,10];
var output = '';
var mixedArray = [4, 56, 11, 13, 97, 22, 7, 36, 19, 5, 8, 10];
for( var i = 0; i < 10; i++){
  output = numbers[i];
  console.log('output: ',output);
}
console.log('first loop ends here');
for( var digit = numbers.length - 1; digit >= 0; digit-- ){
  output = numbers[digit];
  console.log('output: ', output);
}
console.log('second loop ends here');
for ( var oddNum = 0; oddNum < 10; oddNum+=2) {
  output = numbers[oddNum];
  console.log('output: ', output);
}
console.log('third loop ends here');
for (var oddNum = 0; oddNum < 10; oddNum+=2) {
  if (mixedArray[oddNum] % 2 !== 0) {
    output = mixedArray[oddNum];
    console.log('output: ', output);
  } else {
    output = '';
  }
}
console.log('fourth loop ends here');

var classRoom = {'desk1': 'Stu', 'desk2': 'Peggy', 'desk3': 'LoneStar', 'desk4': 'George', 'desk5': 'Sheldon' }
var text = "";
for( var name in classRoom ) {
  text += classRoom[name] + ' is at ' + name + ' - ';
}
console.log(text);

var studentArray = [{ 'name': 'Bob', 'grade': 87 }, { 'name': 'Fred', 'grade': 82 }, { 'name': 'George', 'grade': 93 }, { 'name': 'Robert', 'grade': 85 }];
function findStudent(studentName) {
  var index = 0;
  while (index < studentArray.length) {
    if (studentArray[index].name === studentName) {
      return "Found " + studentName + " their grade is: " + studentArray[index].grade + ".";
    }
    index++;
  }
  return "Student " + studentName + " not found.";
}
console.log('Test1: ' + findStudent('George'));
console.log('Test2: ' + findStudent('Fred'));
console.log('Test3: ' + findStudent('Hank'));
