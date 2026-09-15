const msg = document.querySelector(".counterMessage");
const plusOne = document.querySelector(".plusOne");
const plusFive = document.querySelector(".plusFive");
const plusTen = document.querySelector(".plusTen");
const darkMode = document.querySelector(".darkMode");
const squares = document.querySelector(".squares");
const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");

let num = 0;

msg.innerText = "The number is " + num + "!";

plusOne.innerText = "Click me to add one!";
plusFive.innerText = "Click me to add five!";
plusTen.innerText = "Click me to add ten!";

darkMode.innerText = "Dark Mode";
darkMode.style.marginTop = "20px";

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

box1.style.height = "50px";
box1.style.width = "50px";
box1.style.backgroundColor = "red";
box1.style.marginTop = "50px";

box2.style.height = "50px";
box2.style.width = "50px";
box2.style.backgroundColor = "purple";
box2.style.marginTop = "50px";

box3.style.height = "50px";
box3.style.width = "50px";
box3.style.backgroundColor = "pink";
box3.style.marginTop = "50px";

// let box1Color = "red"
// box1.addEventListener("mouseenter", () => {
//   if (box1.style.backgroundColor == "red") {
//     box1.style.backgroundColor = "green";
//   } else {
//     box1.style.backgroundColor = "blue";
//     let
//   }
// });

let box1Counter = 1;
box1.addEventListener("mouseenter", ()=> {
  if (box1Counter == 1) {
    box1.style.backgroundColor = "green";
    box1Counter = 2
  } else if (box1Counter == 2) {
    box1.style.backgroundColor = "blue";
    box1Counter = 3
  } else {
    box1.style.backgroundColor = "red"
    box1Counter = 1
  }
});

let box2Counter = 1;
box2.addEventListener("mouseenter", () => {
  if (box2Counter == 1) {
    box2.style.backgroundColor = "orange";
    box2Counter = 2;
  } else if (box2Counter == 2) {
    box2.style.backgroundColor = "yellow";
    box2Counter = 3;
  } else {
    box2.style.backgroundColor = "purple";
    box2Counter = 1;
  }
});

let box3Counter = 1;
box3.addEventListener("mouseenter", () => {
  if (box3Counter == 1) {
    box3.style.backgroundColor = "black";
    box3Counter = 2;
  } else if (box3Counter == 2) {
    box3.style.backgroundColor = "brown";
    box3Counter = 3;
  } else {
    box3.style.backgroundColor = "pink";
    box3Counter = 1;
  }
});
// box1.addEventListener("mouseleave", ()=> {
//   if (box1Counter == 3) {
//     box1.style.backgroundColor="blue"
//     box1Counter = 1
//   }
// })
