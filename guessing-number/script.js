document.addEventListener("DOMContentLoaded", reset_game);
// let random_number = Math.floor(Math.random() * 100) + 1;
let random_number;
// Elements in div.resultParas
const guesses = document.querySelector(".guesses");
const last_result = document.querySelector(".lastResult");
const low_or_hi = document.querySelector(".lowOrHi");

// Elements in div.form
const guess = document.querySelector("#guessField");
const guess_submit = document.querySelector(".guessSubmit");
guess_submit.addEventListener("click", check_guess);

let guess_count = 1;
let reset_button;

function check_guess() {
  const user_guess = Number(guess.value);
  console.log(isNaN(user_guess), user_guess);
  if (user_guess === 0 || user_guess > 100) {
    last_result.textContent = "Enter a valid number.(1-100)";
    last_result.style.backgroundColor = "red";
    guess.value = "";
    guess.focus();
    return;
  }
  if (guess_count === 1) guesses.textContent = "Previous guesses :";

  guesses.textContent += ` ${user_guess}`;

  if (user_guess === random_number) {
    last_result.textContent = "Congratulations!!! You got it right";
    last_result.style.backgroundColor = "green";
    low_or_hi.textContent = "";
    set_game_over();
  } else if (guess_count === 10) {
    last_result.textContent = "!!! GAME OVER !!!";
    low_or_hi.textContent = "";
    set_game_over();
  } else {
    last_result.textContent = "Wrong";
    last_result.style.backgroundColor = "red";
    if (user_guess < random_number)
      low_or_hi.textContent = "Last guess was low";
    else if (user_guess > random_number)
      low_or_hi.textContent = "Last guess was high";
  }
  guess_count++;
  guess.value = "";
  guess.focus();
}

function set_game_over() {
  guess.disabled = true;
  guess_submit.disabled = true;

  reset_button = document.createElement("button");
  reset_button.textContent = "Start a new game";
  document.body.appendChild(reset_button);
  reset_button.addEventListener("click", reset_game);
}

function reset_game() {
  guess_count = 1;

  const reset_paras = document.querySelectorAll(".resultParas p");
  for (para of reset_paras) para.textContent = "";

  if (reset_button) reset_button.parentNode.removeChild(reset_button);

  guess.disabled = false;
  guess_submit.disabled = false;

  guess.value = "";
  guess.focus();

  last_result.style.backgroundColor = "white";

  random_number = Math.floor(Math.random() * 100) + 1;

  // a paragraph to show the value to guess, comment or delete in production
  //----------
  // const nb = document.createElement("p");
  // nb.textContent = random_number;
  // document.body.appendChild(nb);
  //comment or delete in production
  //-----------
}
