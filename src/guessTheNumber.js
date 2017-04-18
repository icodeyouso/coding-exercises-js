const readlineSync = require('readline-sync');


const magicNum = Math.floor(Math.random() * 100); // create variables for guess and answer

export default function guessTheNumber(magicNumberForInstance) {
    let guess = undefined
    let score = 0
        // your code here
    while (Number(guess) !== magicNumberForInstance) { //first you need to have a for statement/function that has the job of of 
        //providing the winning scenario 
        guess = readlineSync.question('guess a number between 1 & 100!'); // readlineSync.question the user to guess a number
        // 0 === '0' false
        if (Number(guess) === magicNumberForInstance) { //if function that notifies the user that they won otherwise telling the user to guess again
            console.log('YOU UH BEAST'); //winner alert 
            console.log('You guessed in', score, '# of turns'); //winner alert 
            break; //end the game if won    
        } else { // else function to keep guess again
            console.log("YOU MAKE ME SICK, TRY AGAIN!");
        }
        score++
    }

}