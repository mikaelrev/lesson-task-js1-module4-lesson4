const form = document.querySelector("form");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const button = document.querySelector("button");

function checkIfButtonIsDisabled() {
    if(checkLength(firstName.value, 1) && checkLength(lastName.value, 4) && validateEmail(email.value)) {
        button.disabled = false;
    } else {
        message.innerHTML = "";
        button.disabled = true;
    }
}

firstName.addEventListener("keyup", checkIfButtonIsDisabled);
lastName.addEventListener("keyup", checkIfButtonIsDisabled);
email.addEventListener("keyup", checkIfButtonIsDisabled);

function submitForm(event) {
    event.preventDefault();
    message.innerHTML = `<div class="message">Your Message has been sent</div>`;
    form.reset();
}

form.addEventListener("submit", submitForm);

function checkLength(value, len) {
    if(value.trim().length >= len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}