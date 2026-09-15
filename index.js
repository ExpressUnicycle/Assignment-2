const msg = document.querySelector(".counterMessage");
const plusOne = document.querySelector(".plusOne");
const plusFive = document.querySelector(".plusFive");
const plusTen = document.querySelector(".plusTen");
const darkMode = document.querySelector(".darkMode");

let num = 0;

msg.innerText = "The number is " + num + "!";

plusOne.innerText = "Click me to add one!";
plusFive.innerText = "Click me to add five!";
plusTen.innerText = "Click me to add ten!";

darkMode.innerText = "Dark Mode";
darkMode.style.marginTop = "20px"

plusOne.addEventListener("click", () => {
  num = num + 1;
  msg.innerText = "The number is " + num + "!";
  console.log(num);
});

plusFive.addEventListener("click", () => {
  num = num + 5;
  msg.innerText = "The number is " + num + "!";
  console.log(num);
});

plusTen.addEventListener("click", () => {
  num = num + 10;
  msg.innerText = "The number is " + num + "!";
  console.log(num);
});

let light = true;
darkMode.addEventListener("click", () => {
  if (light) {
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector("body").style.color = "white";
    light = false;
  } else {
    document.querySelector("body").style.backgroundColor = "white";
    document.querySelector("body").style.color = "black";
    light = true;
  }
});
