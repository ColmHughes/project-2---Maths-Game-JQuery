let score = 0;
let right = 0;
let wrong = 0;

function setAdditionGame() {
    $("#myForm").attr("data-gametype", "addition");
    additionQuiz();
}

function setSubtractionGame() {
    $("#myForm").attr("data-gametype", "subtraction");
    subtractionQuiz();
}

function setMultiplicationGame() {
    $("#myForm").attr("data-gametype", "multiplication");
    multiplicationQuiz();
}


function additionQuiz() {
    let num1 = Math.floor(Math.random() * 50);
    let num2 = Math.floor(Math.random() * 50);
    $("#question").text("What is: " + num1 + " + " + num2 + "?");
    $("[name=rightAnswer]").val(num1 + num2);
}


function subtractionQuiz() {
    let num1 = Math.floor(Math.random() * 50);
    let num2 = Math.floor(Math.random() * 50);
    if (num2 > num1){
        let tempNum = num1;
        num1 = num2;
        num2 = tempNum;
    }
    $("#question").text("What is: " + num1 + " - " + num2 + "?");
    $("[name=rightAnswer]").val(num1 - num2);
}

function multiplicationQuiz() {
    let num1 = Math.floor(Math.random() * 50);
    let num2 = Math.floor(Math.random() * 50);
    $("#question").text("What is: " + num1 + " * " + num2 + "?");
    $("[name=rightAnswer]").val(num1 * num2);
}


function checkAnswer() {
    let gametype = $("#myForm").attr("data-gametype");
    if ($("[name=answer]").val() == $("[name=rightAnswer]").val()) {
        score++;
        right++;
    } else {
        score--;
        wrong++;
    }
    $("[name=answer]").val("");
    $("#vs").text("Correct: " + right + ". Wrong: " + wrong);
    
    $("#score").text("Your score is: " + score);
    if (gametype == "addition") {
        additionQuiz();
    }
    if (gametype == "subtraction") {
        subtractionQuiz();
    }
    if (gametype == "multiplication") {
        multiplicationQuiz();
    }
}


additionQuiz();