/* const e1 = document.getElementById("i1");
const e2 = document.getElementById("i2");
const e3 = document.getElementById("i3");
const e4 = document.getElementById("i4");
 */

function seleccionar(sId) {
  const eId = document.getElementById(sId);
  document.addEventListener("keydown", function (event) {
    if (event.key === "a") {
      const color = (eId.style.backgroundColor = "brown");
      return color;
    } else if (event.key === "s") {
      const color = (eId.style.backgroundColor = "darkgreen");
      return color;
    } else if (event.key === "d") {
      const color = (eId.style.backgroundColor = "darkgrey");
      return color;
    }
  });
}
