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
         
function setDivisionGame() {
    $("#myForm").attr("data-gametype", "division");
    divisionQuiz();
}

function setExponentialGame() {
    $("#myForm").attr("data-gametype", "exponential");
    exponentialQuiz();
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

function divisionQuiz() {
    let num1 = Math.floor(Math.random() * 50);
    let num2 = Math.floor(Math.random() * 12) + 1;
    let num3 = num1 * num2;
    $("#question").text("What is: " + num3 + " / " + num2 + "?");
    $("[name=rightAnswer]").val(num3 / num2);    
}

function exponentialQuiz() {
    let num1 = Math.floor(Math.random() * 50);
    $("#question").text("What is: " + num1 + "^2?");
    $("[name=rightAnswer]").val(num1 ** 2);    
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
    if (gametype == "division") {
        divisionQuiz();
    }
    if (gametype == "exponential") {
        exponentialQuiz();
    }
}


additionQuiz();