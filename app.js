let min = 1,
  max = 10,
   winningNum = Math.floor(10 * Math.random()) + 1,
   guessesLeft = 3;
   console.log(winningNum);
 

const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

minNum.textContent = min;
maxNum.textContent = max;

guessBtn.addEventListener("click", function () {
  let guess = parseInt(guessInput.value);

  // validation
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Нужно ввести число от ${min} до ${max}`, "red");
  }

  // check if won
  if (guess === winningNum) {
    guessInput.disabled = true;
    guessInput.style.border = "1px solid green";
    setMessage(`Поздравляю! Вы угадали число ${winningNum}`, "green"); 

  } else {
      guessesLeft -= 1;

    if (guessesLeft === 0) {
      guessInput.disabled = false;
      guessInput.style.border = "1px solid red";
        alert(`Попытки закончены, вы проиграли. Страница будет перезагружена! Правильный ответ ${winningNum}`, "red");
        location.reload();
    } else {
      guessInput.style.border = "2px solid red";
      setMessage(`Неверно! У вас осталось ${guessesLeft} попыток`, "red");
      guessInput.value = "";
    }
  }
});

function setMessage(msg, color) {
  message.textContent = msg;
  message.style.color = color;
}
