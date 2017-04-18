export default

function guessTheNumber(val) {
    // your code here

    var magicNum = 49; // create variables for guess and answer
    var guess;
    for (i == 0; i < 100; i++) { //first you need to have a for statement/function that has the job of of 
        //providing the winning scenario 
        prompt('guess a number between 1 & 100!'); // prompt the user to guess a number 
        if (guess == magicNum) { //if function that notifies the user that they won otherwise telling the user to guess again
            alert('YOU UH BEAST'); //winner alert 
            break; //end the game if won    `
        } else { // else function to keep guess again
            prompt("YOU MAKE ME SICK, TRY AGAIN!");
        }
    }

}