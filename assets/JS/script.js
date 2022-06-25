//here goes my code to add functionality to the html page
let display = document.querySelector("#display");
let clearNum = document.querySelector("#clearNumbers");

function calcNumbers(x) {
  display.value = display.value + x;
}

//DELETE AND CLEAR
clearNum.addEventListener("click", () => {
  if ("c") {
    display.value = "";
  }
});

function deleteNum() {
  if ("del") {
    let arr = display.value.split("");
    arr.pop();
    display.value = arr.join("");
  }
}