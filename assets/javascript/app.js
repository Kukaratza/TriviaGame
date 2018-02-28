//Pseudocode
var library;
/* in qanda.js */
//Create an object array with all the questions and answers 

/* in app.js */

// Create a timer that starts a 60 secs and goes down to zero. 
function stopWatch() {
    var count = 60;
    var counter = setInterval(timer, 1000); //1000 will  run it every 1 second

    function timer() {
        count = count - 1;
        if (count <= 0) {
            clearInterval(counter);
            alert("KABOOOM!!!!")
            return;
        }
        document.getElementById("timeR").innerHTML = count + " secs";
    }
}

// Create a for-loop that picks a random question from the array [library] 
function foo() {
    var randQuestion = library[Math.floor(Math.random() * library.length)];
    console.log(randQuestion);
}

// Append that random number(question) to the <div>Question1</div>
// Append the 3 Answers corresponding to the question selected to id=answer1, id=answer2, id=answer3.
// create an onClick event that uses the :checked selector url("https://api.jquery.com/checked-selector/"). 
// verify is the clickedAnswer === correctAnswer.
//all this is if(answer[i] === clickAnswer)
// var clickAnswer,
// if (library[0].answer[library[0].correctIndex] === clickAnswer) { 
//     alert("good job");
// }
// if the clickAnswer is true then ++correctAnswer variable.
// else ++incorrectAnswer variable.
// clear <div>Question1<div>
// start all over again.

function startGame() {
    stopWatch();
    foo();
}




function onClick() {

}

function endGame() {

}

startGame();
