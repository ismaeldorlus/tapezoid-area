let b1 = document.getElementById("base1");
let b2 = document.getElementById("base2");
let tall = document.getElementById("height");
document.getElementById("calc").addEventListener("click", findArea);
document.getElementById("spanny").style.border = "2px solid green";
function findArea() {
  based1 = Number(b1.value);
  based2 = Number(b2.value);
  long = Number(tall.value);
  console.log(based1, based2, long);
  let area = 0.5 * (based1 + based2) * long;
  area = area.toFixed(2);
  console.log(area);

  document.getElementById("spanny").innerHTML = area;
  document.getElementById("base1").value = "";
  document.getElementById("base2").value = "";
  document.getElementById("height").value = "";
  document.getElementById("check").innerHTML =
    "<img width='20px' src='greenCheck.png' alt=''>";
}
