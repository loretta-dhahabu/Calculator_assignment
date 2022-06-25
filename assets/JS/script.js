//here goes my code to add functionality to the html page
let displayNum = document.querySelector("#display-number");
let clearNumber = document.querySelector("#clearNumbers");

function calcNumbers(i) {
  display.value = display.value + i;
}

//Clear and Delete
clearNum.addEventListener("click", () => {
  if ("c") {
    displayNum.value = "";
  }
});

function deleteNumber() {
  if ("del") {
    let array = displayNum.value.split("");
    array.pop();
    displayNum.value = array.join("");
  }
}
