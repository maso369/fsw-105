const readLineSync= require("readline-sync");

function addTwoNumbers(num1, num2)
{
   return " adding " + num1 + " with " + num2 + " gives you a result of "
   + (num1 + num2);
}
var FirstNumber = readLineSync.questionInt("A Number")
var secondNumber = readLineSync.questionInt("another number");
var mathOperator = readLineSync.question("pick an operator: add, sub, mul, div,");

if(mathOperator == "add")
{
    console.log(addTwoNumbers(FirstNumber,secondNumber));
} else if(mathOperator == "sub")
{
    console.log(addTwoNumbers(FirstNumber,secondNumber))
} else if(mathOperator == "mul")
{
    console.log(addTwoNumbers(FirstNumber,secondNumber))
} else if(mathOperator == "div")
{
    console.log(addTwoNumbers(FirstNumber,secondNumber))
}