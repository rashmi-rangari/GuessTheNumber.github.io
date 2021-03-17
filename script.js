/* 
*Guess The Number Game
*DONE:  Get the values from input and save it to variable numberGuess
*DONE:  Generate a random number 1 to 100 save it to variable correctNumber
*DONE:  console whether the guess is "too high", "to Low" or "is correct" inside playGame() function
*DONE:  create function call displayResult to move the logic for if the guess is too high, too low or correct
*DONE: Complete the ShowYouWon, ShowNumberAbove, ShowNumberBelow
*DONE: Use the ShowYouWon... function within DisplayResult to display correct dialog
*DONE: Save the guess history in a variable call guess
*DONE: Display the guess history using displayHistory() function 
*DONE:  Use initGame() funtion to restrat the game.  
*/

// Variable to store list of guesses

let guesses = [];

 
 // Variable to store correct random number
    let correctNumber = getRandomNumber();
    
 

window.onload = function() {
    document.getElementById("number_submit").addEventListener("click",playGame);
    document.getElementById("restart_game").addEventListener("click", initGame);
     getRandomNumber(); 
    
}


/**
 * Functionality for playing whole game
 */

//Initialize new game by resetting all values and content on the  

function initGame(){
    //Reset the correctNumber
    //Reset the result display
    //Reset the guess array
    //Reset the guess history display

    correctNumber = getRandomNumber();
    document.getElementById("result").innerHTML = "" ;
    guesses = [];
    displayHistory();
}
 
function playGame(){
    let numberGuess = document.getElementById("number-guess").value;
    displayResult(numberGuess);
    saveGuessHistory(numberGuess);
    displayHistory();
} 


/**
 * Return a random number between 1 to 100
 * Hint use Math.random()
 */
function getRandomNumber(){

    let randomNumber = Math.floor(Math.random()*100) + 1;
    return randomNumber;

}

/**
 * SHow the result for the guess is "too hight", "too low" or "correct number" using displayResult() 
 */

function displayResult(numberGuess){

    if ( numberGuess < correctNumber){
        showNumberBelow();
    }else if( numberGuess > correctNumber){
        showNumberAbove();
    }else{
        showYouWon();
    }  
 }

 function getDialog(dialogType, text){
     let dialog;
     switch(dialogType){
         case "warning":
             dialog = "<div class='alert alert-warning' role='alert'>"
            break;
        case "won":
            dialog = "<div class='alert alert-success' role='alert'>"
            break;
    }
    dialog += text;
    dialog += "</div>"
    return dialog;
 }

 function showYouWon()  {

     // retrive the dialog using the getDialog() function and save it to variable called dialog 
     const text = "Awesome job, you got it!"
     let dialog = getDialog('won', text);
     console.log(dialog);
    document.getElementById("result").innerHTML = dialog;
     
 }

 function showNumberAbove(){

     // retrive the dialog using the getDialog() function and save it to variable called dialog
     const text = "Your guess is too high!";
     let dialog = getDialog('warning', text);
     document.getElementById("result").innerHTML = dialog;
 } 

 function showNumberBelow(){

    // retrive the dialog using the getDialog() function and save it to variable called dialog
    const text = "Your guess is too Low!"
     let dialog = getDialog('warning', text);
     document.getElementById("result").innerHTML = dialog;
 }

 // save guess history

 function saveGuessHistory(guess){

    guesses.push(guess);
    console.log(guesses);
 }

 /**
  * Display guess history to user
  * HTML TO USE:
  * <ul class='list-group'>
  * <li class='list-group-item'>You guessed {number}</li>
  * </ul>
  */
    function displayHistory(){
        let index = guesses.length - 1; //TODO
        let list = "<ul class='list-group'>";
        while(index >= 0){
            list += "<li class='list-group-item'>" + "You guessed " + guesses[index] + "</li>";
            index -= 1;
        }
        list += '</ul>';
        document.getElementById("history").innerHTML = list;

    }

