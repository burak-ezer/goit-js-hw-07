const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (
    event.target.elements.email.value.length == 0 ||
    event.target.elements.password.value.length == 0
  ) {
    alert("All form fields must be filled in");
  }

  event.target.reset();
});
