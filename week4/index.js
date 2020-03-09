const readline= require("readline-sync");

function addTwoNumbers(num1, num2)
{
   return "adding" + num1 + "with" + num2 + "gives you a result of"
   + num1 + num2;
}
var FirstNumber = readLineSync.questionint("A Number")
var secondNumber = readLineSync.questionint("another number");
var mathOperator = readLineSync.question("pick an operator: add, sub, mul, div,");

if(mathOperator == "add")
{
    Console.log(addTwoNumbers(num1, num2));
} else if(mathOperator == "sub")
{
    console.log(addTwoNumbers(num1, num2))
} else if(mathOperator == "mul")
{
    console.log(addTwoNumbers(num1, num2))
} else if(mathOperator == "div")
{
    console.log(addTwoNumbers(num1, num2))
}