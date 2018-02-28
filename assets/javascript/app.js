//Pseudocode

/* in qanda.js */
//Create an object array with all the questions and answers [done!]


/* in app.js */

//Global variables.... for now
//var randQuestion;

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


// create a function that randomizes and inserts QAs to the id questions and answers

function addQAs() {
    var randQuestion = Math.floor(Math.random() * library.length); //this is a nuber, dont forget!
    console.log(randQuestion);
    $("#question").html(library[randQuestion].question);
    $("#answer1").html(library[randQuestion].answer[0]);
    $("#answer2").html(library[randQuestion].answer[1]);
    $("#answer3").html(library[randQuestion].answer[2]);
}

// create an onClick event that uses the :checked selector url("https://api.jquery.com/checked-selector/"). 

$("input").on("click", function () {
    $("#log").html( $("input:checked").val() + " is checked!"); //sanity check, works!
  })

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
    addQAs();
}




function onClick() {

}

function endGame() {

}

startGame();
