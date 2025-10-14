const display = document.querySelector(".calculatorDisplay");
const keys = document.querySelectorAll(".key");
const equalsTo = document.querySelector(".equals");
const cancel = document.querySelector(".cancel"); // Cancel button

keys.forEach((key) => {
  key.addEventListener("click", () => {
    if (key.classList.contains("equals") || key.classList.contains("cancel"))
      return;
    display.textContent += key.textContent;
  });
});

equalsTo.addEventListener("click", () => {
  operate();
});

cancel.addEventListener("click", () => {
  display.textContent = "";
});

function operate() {
  let numbers = display.textContent.split(/[+\-*/]/);
  let operands = display.textContent.match(/[+\-*/]/g);

  // Prevent error if user presses '=' with no input
  if (!numbers[0] || !operands) return;

  let result = Number(numbers[0]);

  for (let i = 0; i < operands.length; i++) {
    let nextNumber = Number(numbers[i + 1]);
    let operator = operands[i];

    if (operator === "+") {
      result += nextNumber;
    } else if (operator === "-") {
      result -= nextNumber;
    } else if (operator === "*") {
      result *= nextNumber;
    } else if (operator === "/") {
      result /= nextNumber;
    }
  }

  display.textContent = result;
}
