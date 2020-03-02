function sum(num1, num2){
    return num1 + num2
}

var result = sum(10, 25)
  console.log(result)



function maxOfThree(a, b, c) {
    if ((a >= b) && (a >= c)) { 
        return a;
    } else if ((b >= a) && (b >= c)) {
        return b;
    } else {
        return c;
    }
}

console.log(maxOfThree(343,35124,42))

function odd_even(no){
    var no;
    no=Number();
    if(no%2==0)
    {
    console.log("Even Number");
    }
    else
    {
        console.log("Odd Number");
    }
    }   (odd_even(4))