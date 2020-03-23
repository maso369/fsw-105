var readLineSync = require(`readline-sync`);

var playerName = readLineSync.question(`may i have your name? `);
let isAlive = true;
let haskey = false;

const intro =  `Welcome to the escape room simulator!`;

console.log(intro);

while(isAlive == true){
    const gameMenuOptions = readLineSync.keyIn(`Press the number keys to enter an option: \n 1. put hand in hole. \n 2. Find the key. \n 3. Open the door.\n enter number: `,{limit: `$<1-3>`})
    if (gameMenuOptions == 1)
    {
console.log(`oh no! ${playerName}, its a trap! YOU HAVE DIED. oopsie!`);
        isAlive = false;
    }
    else if (gameMenuOptions == 2 && haskey == false)
    {
      console.log(`You found the key!.... what now ?`);
      haskey = true
    }
    else if (gameMenuOptions == 2 && haskey == true)
    {
      console.log(`You already have the key. find somewhere to put it.`);
      
    }
    else if (gameMenuOptions == 3 && haskey == false)
    {
     console.log(`Its locked. maybe there is a key.`);
    }
    else if (gameMenuOptions == 3 && haskey == true)
    {
     console.log(`Congrats! YOU WIN!`);
     isAlive = false
    }
};