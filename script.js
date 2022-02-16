document.getElementById("title-color").style.color = "#1B4F72";
const player = document.querySelectorAll(".player");
player.forEach(function (element) {
  element.style.backgroundColor = "rgba(93, 109, 126,.3)";
});
document.getElementById("add-course").addEventListener("click", function () {
  const list = document.getElementById("list");
  const courseInput = document.getElementById("course-input");
  const inputValue = courseInput.value;
  const newItem = document.createElement("li");
  newItem.innerText = inputValue;
  list.appendChild(newItem);
  courseInput.value = "";
});

document.getElementById("add").addEventListener("click", function () {
  const inputField = document.getElementById("input-field");
  const inputValue = parseInt(inputField.value);
  inputField.value = inputValue + 1;
  if (inputField.value >= 5) {
    document.getElementById("add").disabled = true;
  }
});
