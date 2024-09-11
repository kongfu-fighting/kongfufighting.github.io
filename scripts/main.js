
let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/a.jpg") {
    myImage.setAttribute("src","images/q.jpg");
  } else {
    myImage.setAttribute("src", "images/a.jpg");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
