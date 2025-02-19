document.addEventListener("DOMContentLoaded", () => {
  generateNumbers();
  placeEquation();
});

let num1, num2;

function generateNumbers() {
  num1 = Math.floor(Math.random() * 50);
  num2 = Math.floor(Math.random() * 50);
}

function placeEquation(answer = "?", equalsSymbol = "=") {
  document.getElementById("equation").textContent = `${num1} + ${num2} ${equalsSymbol} ${answer}`; 
}

function checkAnswer() {
  const answerField = document.getElementById("answer");
  let userInput = answerField.value.trim();

  if (!userInput || isNaN(userInput)) {
    if (!userInput)
      userInput = userInput + " "
    document.getElementById("result").textContent = `Your answer '${userInput}' is not correct. Please enter a valid number.`;
    answerField.value = "";
    return;
  }

  const userAnswer = parseInt(userInput);
  const correctAnswer = num1 + num2;

  answerField.remove();
  document.getElementById("submit").remove();

  if (userAnswer === correctAnswer) {
    placeEquation(userAnswer);
    document.getElementById("result").innerHTML = `Your answer '${userInput}' is correct! <a href="#" onclick="resetGame(true)">Try Another</a>`;
  } else {
    placeEquation(userAnswer, "≠");
    document.getElementById("result").innerHTML = `Your answer '${userInput}' is incorrect! <a href="#" onclick="resetGame(false)">Try Again</a>`;
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
