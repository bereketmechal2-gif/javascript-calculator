const display = document.getElementById("display");
function aTOdisplay(input) {
  display.value += input;
}
function calculat() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = alert("Error");
  }
}
function clearDisplay() {
  display.value = "";
}
function back() {
  display.value = display.value.slice(0, -1);
}
document.addEventListener("keydown", function (event) {
  if (!isNaN(event.key) || "+-*/.".includes(event.key)) {
    addDisplay(event.key);
  } else if (event.key === "Enter") {
    calculat();
  } else if (event.key === "Backspace") {
    back();
  } else if (event.key === "Escape") {
    clearDisplay();
  }
});
