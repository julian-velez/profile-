let checkbox = document.getElementById("checkbox");
function toggle() {
  if (checkbox) {
    document.body.classList.add("dark");
    checkbox = false;
  } else {
    document.body.classList.remove("dark");
    checkbox = true;
  }
}
