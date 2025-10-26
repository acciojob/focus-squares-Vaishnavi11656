//your JS code here. If required.
const squares = document.querySelectorAll(".square");

for (let square of squares) {
  square.addEventListener("mouseover", (e) => addBgColor(e));
  square.addEventListener("mouseout", () => addDefaultBgColor());
}

function addBgColor(e) {
  for (let sq of squares) {
    if (sq !== e.target) {
      sq.style.backgroundColor = "#6F4E37"; // Coffee
    } else {
      sq.style.backgroundColor = "#E6E6FA"; // Keep Lavender on hovered one
    }
  }
}

function addDefaultBgColor() {
  for (let sq of squares) {
    sq.style.backgroundColor = "#E6E6FA"; // Reset to Lavender
  }
}
