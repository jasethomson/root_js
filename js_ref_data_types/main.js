var student_array = ['Andrew', 'Kevin', 'Jase', 'Noelle', 'Allese', 'Lindsey'];
console.log('The third student in the array is: ' + student_array[2]);
console.log("Full Student Array: " , student_array);
console.log("There are " + student_array.length + " students in the student_array");
student_array.push('Fred');
student_array.unshift('Nancy');
console.log('Full Student Array: ' , student_array);
console.log("There are " + student_array.length + " students in the student_array");
student_array.splice(3,1);
console.log('Spliced my name, now the Full Student Array is: ', student_array);
console.log("Now there are " + student_array.length + " students in the student_array");
var student_array2 = ['John','George','Mary'];
console.log('I created a new array, student_array2: ' , student_array2);
var student_groups_combined = student_array.concat(student_array2);
console.log('student_array and student_array2 are merged to make student_groups_combined: ' , student_groups_combined);

var student = {};
student.firstName = 'Jase';
student.lastName = 'Thomson';
student.age = '27';
student.school = 'LearningFuze';
student.questionQueue = [];
student.hasQuestion = false;
student.greeting = function () {
  return "Hello, my name is " + student.firstName;
};
student.aboutMe = function () {
  return "My full name is " + student.firstName + " " + student.lastName + ", I am " + student.age + " years old and I am a student at " + student.school + ".";
};
student.askQuestion = function(question) {
  student.questionQueue.push(question);
  student.hasQuestion = true;
  return "A question has been added to your queue";
};
student.answerQuestion = function(){
  var currentQuestion = "";
  if (student.hasQuestion === true){
    currentQuestion = student.questionQueue.splice((student.questionQueue.length-1), 1);
  }
  if( student.questionQueue.length > 0){
    student.hasQuestion = true;
  } else {
    student.hasQuestion = false;
  }
  if (currentQuestion === ""){
    return "You have no questions in your queue";
  } else {
    return currentQuestion;
  }
}
console.log('greeting Method: ' + student.greeting());
console.log('aboutMe Method: ' + student.aboutMe());
console.log('answerQuestion Method: ' + student.answerQuestion());
console.log('askQuestion Method: ' + student.askQuestion('What time is it?'));
console.log('askQuestion Method: ' + student.askQuestion('What day is it?'));
console.log('askQuestion Method: ' + student.askQuestion('What year is it?'));
console.log('answerQuestion Method: ' + student.answerQuestion());
console.log('answerQuestion Method: ' + student.answerQuestion());
console.log('answerQuestion Method: ' + student.answerQuestion());
console.log('answerQuestion Method: ' + student.answerQuestion());

function Student(firstName, lastName, age, school){
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.school = school;
  this.questionQueue = [];
  this.hasQuestion = false;
}
Student.prototype.greeting = function(){
  return "Hello, my name is " + this.firstName;
};
Student.prototype.aboutMe = function(){
  return "My full name is " + this.firstName + " " + this.lastName + ", I am " + this.age + " years old and I am a student at " + this.school + ".";
};
Student.prototype.askQuestion = function(question){
  this.questionQueue.push(question);
  this.hasQuestion = true;
  return "A question has been added to your queue";
};
Student.prototype.answerQuestion = function(){
  var currentQuestion = "";
  if (this.hasQuestion === true) {
    currentQuestion = this.questionQueue.splice((this.questionQueue.length - 1), 1);
  }
  if (this.questionQueue.length > 0) {
    this.hasQuestion = true;
  } else {
    this.hasQuestion = false;
  }
  if (currentQuestion === "") {
    return "You have no questions in your queue";
  } else {
    return currentQuestion;
  }
}

var student1 = new Student('Jack', 'Smith', 22, 'Davis', [], false);
var student2 = new Student('Noelle', 'Gibbs', 35, 'Puget Sound', [], false);



console.log('Objects student, student1, and student2: ' , student , student1 , student2 );

console.log('student1 greeting Method: ' + student1.greeting());
console.log('student2 aboutMe Method: ' + student2.aboutMe());
console.log('student1 answerQuestion Method: ' + student1.answerQuestion());
console.log('student1 askQuestion Method: ' + student1.askQuestion('What is your favorite number?'));
console.log('student1 askQuestion Method: ' + student1.askQuestion('What is your favorite color?'));
console.log('student1 askQuestion Method: ' + student1.askQuestion('What is your favorite activity?'));
console.log('student1 answerQuestion Method: ' + student1.answerQuestion());
console.log('student1 answerQuestion Method: ' + student1.answerQuestion());
console.log('student1 answerQuestion Method: ' + student1.answerQuestion());
console.log('student1 answerQuestion Method: ' + student1.answerQuestion());
