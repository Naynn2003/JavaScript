// I used the variable name 'button' because
// it's shorter, but feel free to use whatever
// variable name you want.
const button = document.querySelector(".js-button");
console.log(button.classList.contains("js-button"));

// The word "toggle" means turn on/off.
function toggleButton(selector) {
  const button = document.querySelector(selector);
  if (!button.classList.contains("is-toggled")) {
    button.classList.add("is-toggled");
  } else {
    button.classList.remove("is-toggled");
  }
}

//g

// The word "toggle" means turn on/off.
function toggleButton1(selector) {
  const button1 = document.querySelector(selector);
  if (!button1.classList.contains('is-toggled1')) {

    // Before turning this button ON, check if there's
    // already a button that's turned ON and turn it OFF.
    turnOffPreviousButton();

    button1.classList.add('is-toggled1');
  } else {
    button1.classList.remove('is-toggled1');
  }
}

function turnOffPreviousButton() {
  const previousButton = document.querySelector('.is-toggled1');
  if (previousButton) {
    previousButton.classList.remove('is-toggled1');
  }
}
