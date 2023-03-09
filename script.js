let lightTheme = true;
function changeTheme() {
  let background = document.querySelector("body");
  let button = document.querySelector("div#button");

  if (lightTheme) {
    background.style.backgroundColor = "var(--dark)";
    lightTheme = false;
    button.style = "left: 58.5%";
    return;
  }

  if (!lightTheme) {
    background.style.backgroundColor = "var(--light)";
    lightTheme = true;
    button.style = "left: 0%";
    return;
  }
}
