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
var correctAnswer = 0;
var wrongAnswer = 0;
var counter = 61;

// Create a function that when page loads or Start Button gets clicked starts the game again.
function startGame() {
    enableClicks();
    stopWatch();
    addQAs();
    $("#correct").text("0");
    $("#incorrect").text("0");
    correctAnswer = 0;
    wrongAnswer = 0;
}

// Create a timer that starts a 60 secs and goes down to zero. 
function stopWatch() {
    count = 61;
    counter = setInterval(timer, 1000); //1000 will  run it every 1 second
    function timer() {
        count = count - 1;
        if (count === 0) {
            $('#answer1').off();
            $('#answer2').off();
            $('#answer3').off();
            showButton();
            stopTimer();
            // element.style.display = 'block'; 
          //  document.getElementById("timeR").innerHTML = "NICE";
        }
        document.getElementById("timeR").innerHTML = count;
    }
}

function stopTimer() {
    clearInterval(counter);
}

// create a function that randomizes and inserts QAs to the id questions and answers
function addQAs() {
    randQuestion = Math.floor(Math.random() * library.length); //this is a nuber, dont forget!
    //console.log(randQuestion);
    $("#question").html(library[randQuestion].question);
    $("#answer1_1").find('label').text(library[randQuestion].answer[0]);
    $("#answer2_1").find('label').text(library[randQuestion].answer[1]);
    $("#answer3_1").find('label').text(library[randQuestion].answer[2]);
}

// create an onClick event that uses the :checked selector url("https://api.jquery.com/checked-selector/"). 
function enableClicks() {
    $("input").on("click", function () {
        $("#log").html($("input:checked").val() + " is checked!"); //sanity check, works!
        var foo = $("input:checked").attr("index");
        clickAns.click = parseInt(foo);
        clickAns.right = library[randQuestion].correctIndex;
        library.splice(randQuestion, 1);
        checkAnswer();
        swithQuestion();
        console.log(clickAns);
    });
}


// verify is the clickAns.click === clickAns.right
function checkAnswer() {
    // if the clickAnswer is true then ++correctAnswer variable.
    if (clickAns.click === clickAns.right) {
        correctAnswer++;
        $("#correct").html(correctAnswer);
        // else ++wrongAnswer variable.
    } else {
        wrongAnswer++;
        $("#incorrect").html(wrongAnswer);
    }
}

// clear <div>Question1<div> and start all over again.
function swithQuestion() {
    addQAs();
    document.getElementById("answer1").checked = false;
    document.getElementById("answer2").checked = false;
    document.getElementById("answer3").checked = false;
}

function showButton() {
    $("#reset").show();
}

$("#reset").on("click", function () {
    stopTimer();
    startGame();
});

// need to work on this.
//    if ((correctAnswer + wrongAnswer) === 30) {
//         alert("game over")
//     };

startGame();

