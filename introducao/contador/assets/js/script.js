var num = document.getElementById("num");
var contadornum = 0;
function increment() {
  contadornum = contadornum + 1;
  num.innerHTML = contadornum;
}
function decrement() {
  contadornum = contadornum - 1;
  num.innerHTML = contadornum;
}
