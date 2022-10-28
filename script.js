"use strict";
const container = document.querySelector(".container");
const display = document.querySelector("h1");
const btn = document.querySelector(".color-generator");
const btnCopy = document.querySelector(".copy");
function colorGenerator() {
  return "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
}

btn.addEventListener("click", () => {
  display.innerText = colorGenerator();
  container.style.backgroundColor = display.innerText;
});
