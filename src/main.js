"use strict";

const btn = document.querySelector(".btn");
const number = document.querySelector(".number");
const quote = document.querySelector(".quote");

const getAdvice = async function () {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();
  try {
    quote.textContent = `"${data.slip.advice}"`;
    quote.classList.add("fade-in");
    setTimeout(() => {
      quote.classList.remove("fade-in");
    }, 500);
    number.textContent = data.slip.id;
  } catch (error) {
    alert(error);
  }
};

btn.addEventListener("click", getAdvice);
getAdvice();
