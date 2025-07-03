function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buton = document.querySelector(".change-color");

buton.addEventListener("click", function() {
  let color = getRandomHexColor();
  document.querySelector("body").setAttribute("style", `background-color: ${color};`)
  document.querySelector(".color").innerHTML = color;
});
