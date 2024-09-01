window.addEventListener("resize", newNum);

function newNum() {
  document.getElementById("num").innerHTML = Math.random();
}
