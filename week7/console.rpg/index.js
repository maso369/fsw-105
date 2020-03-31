const readLineSync = require(`readline-sync`);

const name = readLineSync.question(`May i Have Your Name ? `);

readLineSync.question(`ah, Hello There ` + name + `, Welcome To LABYRINTH! you must fight the forces of evil and restore balance to the land. PRESS ENTER TO BEGIN.`);

const enemy = [`Zombie`,`Demon`,`Ghoul`,`bat`]
const treasure = [`potion`, `Body armor`, `bandages`, `meds`]
var prizes = []
let playerHealth = 40
const options = [`Walk`,`Exit`,`Print`]
let  pickUp = treasure[Math.floor(Math.random()*treasure.length)];

function game(){
    const attackPower = Math.floor(Math.random() * (5 - 4 + 3) + 5)
    const enemies = enemy[Math.floor(Math.random() * enemy.length)]
    let enemiesHealth = 40
    const enemiesPower = [Math.floor(Math.random() * (5 - 3 + 2) + 5 )]

    const index = readLineSync.keyInSelect(options, `What will your next move be ?`)

    if(options[index] == `Exit`) {
        return playerHealth = 0;
    } else if (options[index] == `Print`){
        console.log(name + `: \n` + playerHealth + `\n treasure: ` + pickUp)
    } else if(options[index] == `Walk`){
        let Key = Math.random()
         if (Key <= .3){
             console.log(`walking.....`)
         } else if(Key >= .3) {
             console.log(`A ` + enemies + ` Has Appeared!`)

             while (enemiesHealth > 0 &&  playerHealth > 0){

                const player = readLineSync.question(`What do you want to do ? ENTER "r" to run or, "a" to attack: `)

                switch (player){
                    case `r`:
                        const run = Math.random()
                        if(run < .5){
                            console.log(`Before you got away ` + enemies + ` attacks you with: ` +enemiesPower)
                            
                        } else {
                            console.log(`You Escaped!`)
                            break
                        }

                        case `a`:
                            enemiesHealth -= attackPower
                            console.log(` You struck ` + enemies + ` with ` + attackPower + ` attack power`)

                            playerHealth -= enemiesPower
                            console.log(`enemy struck you with: ` + enemiesPower + ` attack power`) 

                            if (enemiesHealth <= 0){
                                console.log(`you killed ` + enemies + `.\n` + enemies + ` left: ` + pickUp)
                                 let loot = Math.random()
                                 if (loot <= .3){
                                     prizes.push(pickUp)}
                                 } else if(playerHealth <= 0){
                                     console.log( enemies + ` Have defeated you. YOU DIED!`)}
                                 
                            
                }
             }
         }
    }
         
}
while(playerHealth > 0){
    userRestore = function(){
        userActive = true;
        userHealth = 40;
    };
    userRestore()
    game()
}