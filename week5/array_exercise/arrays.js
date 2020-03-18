function fiveAndUp(arr)
{
  const result = arr.filter(function(num)
  {
   if (num >= 5)
   {
       return num;
   }
  }
  )
  return result;
}

console.log(fiveAndUp([3, 6, 8, 2]))

function evensOnly(arr)
{
 const result = arr.filter(function(num)
 {
    if(num % 2 == 0)
    return num; 
 }
 )
 return result;
}
console.log(evensOnly([3, 6, 8, 2]))

function fiveCharactersOrFewer(arr){
    return arr.filter(e => e.length<=5)
  }
  
  console.log(fiveCharactersOrFewer(["dog","wolf", "by", "family", "eaten", "camping"]))

function ofAge(arr){
  
    let person = 
   [ { name:"angelina jolie", age: 80 },
    { name:"eric jones", age: 2 },
    { name:"paris hilton", age: 5 },
    { name:"kanye west", age: 16 },
    { name:"bob ziroll", age: 100 }
]
let result = arr.filter(e=>e.age>18);
return result
 
} 
console.log(ofAge([
    { name:"angelina jolie", age: 80 },
    { name:"eric jones", age: 2 },
    { name:"paris hilton", age: 5 },
    { name:"kanye west", age: 16 },
    { name:"bob ziroll", age: 100 },
]))

function doubleNumbers(arr){
    
    const result = arr.map(function(num){
     return num * 2
    })
}
console.log(doubleNumbers(2, 5, 100))

