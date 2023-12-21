
let $_COUNT = 0;

document.getElementById("count-down").onclick = () => {
  if ($_COUNT > 0) {
    $_COUNT--;
  }
  document.getElementById("counter-value").innerHTML = $_COUNT;
}

document.getElementById("count-reset").onclick = () => {
  $_COUNT = 0;
  document.getElementById("counter-value").innerHTML = $_COUNT;
}

document.getElementById("count-up").onclick = () => {
  $_COUNT++;
  document.getElementById("counter-value").innerHTML = $_COUNT;
}
