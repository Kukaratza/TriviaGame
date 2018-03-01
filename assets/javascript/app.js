//Pseudocode

/* in qanda.js */
//Create an object array with all the questions and answers [done!]


/* in app.js */

//Global variables.... for now
var clickAns = {
    click: null,
    right: null
};
var randQuestion;
var correctAnswer;
var wrongAnswer;

// Create a timer that starts a 60 secs and goes down to zero. 
function stopWatch() {
    var count = 60;
    var counter = setInterval(timer, 1000); //1000 will  run it every 1 second

    function timer() {
        count = count - 1;
        if (count <= 0) {
            clearInterval(counter);
            //alert("KABOOOM!!!!")
            return;
        }
        document.getElementById("timeR").innerHTML = count + " secs";
    }
}

// create a function that randomizes and inserts QAs to the id questions and answers

function addQAs() {
    randQuestion = Math.floor(Math.random() * library.length); //this is a nuber, dont forget!
    console.log(randQuestion);
    $("#question").html(library[randQuestion].question);
    $("#answer1").html(library[randQuestion].answer[0]);
    $("#answer2").html(library[randQuestion].answer[1]);
    $("#answer3").html(library[randQuestion].answer[2]);
}

// create an onClick event that uses the :checked selector url("https://api.jquery.com/checked-selector/"). 
$("input").on("click", function () {
    $("#log").html($("input:checked").val() + " is checked!"); //sanity check, works!
    // if (library.length === 30) return win()
    //this will be pushed to an array of objects [] = [{key : clickedchioce, key : rightchoice}, {},  {}]
    var foo = $("input:checked").attr("index");
    clickAns.click = parseInt(foo);
    clickAns.right = library[randQuestion].correctIndex;
    // checkAnswer();
    console.log(clickAns);
    checkAnswer();
});


function checkAnswer() {
    if (clickAns.click === clickAns.right) {
        correctAnswer++;
        $("#correct").html(correctAnswer);
    } else {
        wrongAnswer++;
        $("#incorrect").html(wrongAnswer);
    }
}

// verify is the clickedAnswer === correctAnswer.

// arr.array.forEach(element => {
//     if(element.theirchoice === element.correct)
// });

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
