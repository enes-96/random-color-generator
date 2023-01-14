"use strict";
const display = document.querySelector("h1");
const btn = document.querySelector(".color-generator");
function colorGenerator() {
  return "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
}

btn.addEventListener("click", () => {
  display.innerText = colorGenerator();
  document.body.style.backgroundColor = display.innerText;
  display.style.color = colorGenerator();
  btn.style.outlineColor = colorGenerator();
  btn.style.backgroundColor = colorGenerator();
});
