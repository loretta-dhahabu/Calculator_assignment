//here goes my code to add functionality to the html page
let displayNum = document.querySelector("#display-number");
let clearNumber = document.querySelector("#clearNumbers");

function calcNumbers(i) {
  displayNum.value = displayNum.value + i;
}

//Clear and Delete
clearNumber.addEventListener("click", () => {
  if ("c") {
    displayNum.value = "";
  }
});

function deleteNumber() {
  if ("del") {
      let array = displayNum.value.split( "" );
      
    displayNum.value = array.join("");
  }
}
