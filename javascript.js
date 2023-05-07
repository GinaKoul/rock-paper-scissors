/*Create a boolean variable named semicolon with default value false.
let semicolon = false;*/

//Create a global intiger variable named computer with default value 0.
let computer = 0;

//Create a global intiger variable named player with default value 0.
let player = 0;

//Toggle classes to show and hide the Credits and change the arrow direction
const cButton = document.querySelector(".cButton");

cButton.addEventListener("click",credits);

function credits(){
    const credit = document.querySelector(".end");
    credit.classList.toggle("credits");
    const arrow = document.querySelector(".arrow");
    arrow.classList.toggle("down");
    arrow.classList.toggle("up");
}

/*window.onload = start();


document.addEventListener("DOMContentLoaded", function(){
    start();
});

function start(){
    //Create a string variable named message1 and give it a value. 
    let message1 = "Are you ready to play Rock Paper Scissors?";

    //Create a string variable named message1 and give it a value.
    let message2 = "Let's get started!";

    //Call the para function and pass the message1 into it.
    para(message1);

    async () => {
        await sleep(5000);
    }

    //Call the para function and pass the message2 into it after time out of 5 seconds.
    para(message2);

    async () => {
        await sleep(5000);
    }

    //document.getElementById("start").style.display = "none";
    //document.getElementById("play").style.display = "block";   

}

//Create a function named para that takes a string variable, turns it into an array and displays each letter one by one.
function para(message){

    //Create an array with the content of message.
    let array = Array.from(message);

    let aLenght = array.length;

    //Create a string variable named newMess with value of "". 
    let newMess = "";

    for ( let i=0; i<aLenght; i++ ){

        //concatenate the newMess with the array object number i and return the result to newMess.
        newMess = newMess + array[i];

        /*async () => {
            await sleep(5000);
        }

        setTimeout(()=>document.getElementById("start").innerHTML= `<p>${newMess}</p>`; 2000);

    }
    
}

function sleep(ms) {
    return new Promise.resolve(setTimeout(resolve, ms));
  }
*/

//Create a function that gets a random number named getComputerChoice.
function getComputerChoice(){

    //Create an intiger variable named number. Use math.random() to get a random number between 0 and 2 as a value.
    let number = Math.floor(Math.random() * 3);

    //Create a string variable with the name cChoice and default value rock.
    let cChoice;

    //If the number equals to 0 change the value of cChoice to paper.
    if ( number === 0 ){
        cChoice = "paper";

    //Else if the number equals to 1 change the value of cChoice to scissors.
    }else if ( number === 1 ){
        cChoice = "scissors";

    //Else if the number equals to 2 change the value of cChoice to rock.
    }else if ( number === 2 ){
        cChoice = "rock";
    }

    //Return the value of cChoice.
    return cChoice;

}

//Create a function that takes two variables and returns a message named round.
function round(pChoice){

    //Create a string variable named computerSelection that calls the getComputerChoice() function.
    let computerSelection = getComputerChoice();
    
    //Create a string variable named playerSelection that has the players choice as a value.
    let playerSelection = pChoice;

    //If computerSelection equals playerSelection.
    if ( computerSelection === playerSelection ){

            //Change icon of div class img1 and img2 to playerSelection.
            document.getElementById("img1").innerHTML= `<img class='questionmark' src='./icons/${playerSelection}.png' placeholder='question mark'>`;

            document.getElementById("img2").innerHTML= `<img class='questionmark' src='./icons/${playerSelection}.png' placeholder='question mark'>`;

            //Return message Draw! Play again.
            document.getElementById("message").innerHTML= "<p>Draw! Play again.</p>";

    }else{

        //If the computerSelection equals paper
        if ( computerSelection === "paper"){

            //Change icon of div class img2 to paper.
            document.getElementById("img2").innerHTML= "<img class='questionmark' src='./icons/paper.png' placeholder='question mark'>";

            //If playerSelection equals rock
            if ( playerSelection === "rock" ){

                //Change icon of div class img1 to rock.
                document.getElementById("img1").innerHTML= "<img class='questionmark' src='./icons/rock.png' placeholder='question mark'>";

                //Return message You lose! Paper beats rock.
                document.getElementById("message").innerHTML= "<p>You lose! Paper beats rock.</p>";

                //Increase computer by 1
                computer ++;

            //Else if playerSelection equals scissors
            }else if ( playerSelection === "scissors" ){

                //Change icon of div class img1 to scissors.
                document.getElementById("img1").innerHTML= "<img class='questionmark' src='./icons/scissors.png' placeholder='question mark'>";

                //Return message You win! Scissors beats paper.
                document.getElementById("message").innerHTML= "<p>You win! Scissors beats paper.</p>";

                //Increase player by 1
                player ++;
            
            }

        //Else if computerSelection equals scissors
        }else if ( computerSelection === "scissors"){

            //Change icon of div class img2 to scissors.
            document.getElementById("img2").innerHTML= "<img class='questionmark' src='./icons/scissors.png' placeholder='question mark'>";

            //If playerSelection equals paper
            if ( playerSelection === "paper"){

                //Change icon of div class img1 to paper.
                document.getElementById("img1").innerHTML= "<img class='questionmark' src='./icons/paper.png' placeholder='question mark'>";

                //Return message You lose! Scissors beats paper.
                document.getElementById("message").innerHTML= "<p>You lose! Scissors beats paper.</p>";

                //Increase computer by 1
                computer ++;

            //Else if playerSelection equals rock
            }else if ( playerSelection === "rock"){

                //Change icon of div class img1 to rock.
                document.getElementById("img1").innerHTML= "<img class='questionmark' src='./icons/rock.png' placeholder='question mark'>";

                //Return message You win! Rock beats scissors.
                document.getElementById("message").innerHTML= "<p>You win! Rock beats scissors.</p>";

                //Increase player by 1
                player ++;

            }

        //Else if computerSelection equals rock
        }else if ( computerSelection === "rock" ){

            //Change icon of div class img2 to rock.
            document.getElementById("img2").innerHTML= "<img class='questionmark' src='./icons/rock.png' placeholder='question mark'>";

            //If playerSelection equals scissors
            if (playerSelection === "scissors"){

                //Change icon of div class img1 to scissors.
                document.getElementById("img1").innerHTML= "<img class='questionmark' src='./icons/scissors.png' placeholder='question mark'>";

                //Return message You lose! Rock beats scissors.
                document.getElementById("message").innerHTML= "<p>You lose! Rock beats scissors.</p>";

                //Increase computer by 1
                computer ++;

            //Else if playerSelection equals paper
            }else if (playerSelection === "paper"){

                //Change icon of div class img1 to paper.
                document.getElementById("img1").innerHTML= "<img class='questionmark' src='./icons/paper.png' placeholder='question mark'>";

                //Return message You win! Paper beats rock.
                document.getElementById("message").innerHTML= "<p>You win! Paper beats rock.</p>";

                //Increase player by 1
                player ++;
            
            }
        }
    }

    //Refresh the display of the score.
    document.getElementById("score").innerHTML = `<p> ${player} - ${computer}</p>`;

    //Call displayWinner() function and pass the player and computer variables to it.
    displayWinner(player,computer);

}

//Create function of name displayWinner shows the winner.
function displayWinner(player,computer){

    //If player or computer has a value of 5 return win or lose.
    if ( player === 5 || computer === 5 ){

        //Change style display of div of id game to none.
        document.getElementById("game").style.display = "none";

        //Change style display of div of id winner to block.
        document.getElementById("winner").style.display = "flex";

        //If player value equals 5
        if ( player === 5 ){
            //Return message END OF GAME. YOU WIN.
            document.getElementById("winner").innerHTML= "<p>END OF GAME</p> <p>YOU WON</p> <button onclick='restartGame()'>Restart Game</button>";

        //Else if computer value equals 5
        }else if ( computer === 5 ){
            //Return message END OF GAME. YOU LOSE.
            document.getElementById("winner").innerHTML= "<p>END OF GAME</p> <p>YOU LOST</p> <button onclick='restartGame()'>Restart Game</button>";
        }

    }

}

//Create a function called restartGame that changes the display to the previous one and sets the value of computer and player to 0.
function restartGame(){
    
    //Change style display of div of id game to block.
    document.getElementById("game").style.display = "flex";

    //Change style display of div of id winner to none.
    document.getElementById("winner").style.display = "none";

    //Set value of computer to 0.
    computer = 0;

    //Set value of player to 0.
    player = 0;

    //Refresh the display of the score.
    document.getElementById("score").innerHTML = `<p> ${player} - ${computer}</p>`;

    //Remove the message of the round.
    document.getElementById("message").innerHTML= "<p></p>";

     //Change icon of div class img1 to questionmark.
     document.getElementById("img1").innerHTML= `<img class='questionmark' src='./icons/question-mark.png' placeholder='question mark'>`;

    //Change icon of div class img1 to questionmark.
     document.getElementById("img2").innerHTML= `<img class='questionmark' src='./icons/question-mark.png' placeholder='question mark'>`;
}
