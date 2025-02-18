document.addEventListener("DOMContentLoaded", () => {
  generateNumbers();
  placeEquation();
});

let num1, num2;

function generateNumbers() {
  num1 = Math.floor(Math.random() * 50);
  num2 = Math.floor(Math.random() * 50);
}

function placeEquation(answer = "?") {
  document.getElementById("equation").textContent = `${num1} + ${num2} = ${answer}`; 
}

function checkAnswer() {
  const answerField = document.getElementById("answer");
  const userInput = answerField.value.trim();

  if (!userInput || isNaN(userInput)) {
    document.getElementById("result").textContent = "Please enter a valid number.";
    answerField.value = "";
    return;
  }

  const userAnswer = parseInt(userInput);
  const correctAnswer = num1 + num2;

  placeEquation(userAnswer);

  answerField.remove();
  document.getElementById("submit").remove();

  if (userAnswer === correctAnswer) {
    document.getElementById("result").innerHTML = `Correct! <a href="#" onclick="resetGame(true)">Try Another</a>`;
  } else {
    document.getElementById("result").innerHTML = `Incorrect! <a href="#" onclick="resetGame(false)">Try Again</a>`;
  }
}

function resetGame(generateNewNumbers) {
  document.getElementById("result").textContent = "";

  if (generateNewNumbers) {
    generateNumbers();
  }

  placeEquation();

  const input = document.createElement("input");
  input.type = "text";
  input.id = "answer";
  input.size = 3;

  const button = document.createElement("button");
  button.id = "submit";
  button.textContent = "Submit";
  button.onclick = checkAnswer;

  document.getElementById("equation").after(input, button);
}