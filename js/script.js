// selectors
const randomInputBox = document.getElementById("generateInput");
const randomButton = document.getElementById("generateBtn");
const insertPinBox = document.getElementById("inputBox");
const submitBtn = document.getElementById("submitBtn");
const matched = document.getElementById("match");
const notMatched = document.getElementById("notMatch");

// random number generator
function randomGenerator() {
   let randomNumber = Math.floor(Math.random() * 100000 + 1);

   randomInputBox.value = randomNumber;
}

// event listeners
randomButton.addEventListener("click", () => {
   randomGenerator();
});

submitBtn.addEventListener("click", () => {
   if (randomInputBox.value === insertPinBox.value) {
      matched.style.display = "block";
   } else {
      notMatched.style.display = "block";
   }
});
