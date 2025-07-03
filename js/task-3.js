const inputName = document.querySelector("#name-input");
const result = document.querySelector("span");

inputName.addEventListener("input", function (event) {
  if (event.target.value == "") {
    result.textContent = "Anonymous";
  } else {
    result.textContent = this.value.trim();
  }
});
