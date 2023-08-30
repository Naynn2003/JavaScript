String(25);
console.log("25" - 5);
console.log("25" + 5);

window.document;
window.console.log("window");
window.alert;

function handleCostKeydown(event) {
  if (event.key === "Enter") {
    calculateTotal();
  }
}

function calculateTotal() {
  const inputElement = document.querySelector(".js-cost-input");
  let cost = Number(inputElement.value) * 100;

  // First, reset all previous messages.
  document.querySelector(".js-total-cost").innerHTML = "";
  document.querySelector(".js-error-message").innerHTML = "";

  if (cost < 0) {
    document.querySelector(".js-error-message").innerHTML =
      "Error: cost cannot be less than $0";
    // If we display an error, we can use return to
    // end this function immediately. This is called
    // an "early return" and it makes the code cleaner
    // because it reduces nesting / indents.
    return;
  }

  if (cost < 4000) {
    cost = cost + 1000;
  }

  document.querySelector(".js-total-cost").innerHTML = `$${cost / 100}`;
}

function subscribe() {
  const buttonElement = document.querySelector(".js-subscribe-button");

  if (buttonElement.innerText === "Subscribe") {
    buttonElement.innerHTML = "Subscribed";
    buttonElement.classList.add("is-subscribed");
  } else {
    buttonElement.innerHTML = "Subscribe";
    buttonElement.classList.remove("is-subscribed");
  }
}
