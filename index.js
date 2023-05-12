const registerForm = document.getElementById("register-form");
const nameInput = document.getElementById("register-name");
const emailInput = document.getElementById("register-email");
const passwordInput = document.getElementById("password");

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control valid";
}

function showError(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control invalid";
}

function checkRequired(inputArr) {
  let isValid = true;

  inputArr.forEach((input) => {
    if (input.value.trim() === "") {
      showError(input);
      isValid = false
    } else {
      showSuccess(input);
    }
  });
  return isValid;
}

registerForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form submission

  // Perform form validation
  const isValid = checkRequired([nameInput, emailInput, passwordInput]);

  // If form is valid, proceed with form submission
  if (isValid) {
    window.location.href = "seif.html";
  }
});
