/* const e1 = document.getElementById("i1");
const e2 = document.getElementById("i2");
const e3 = document.getElementById("i3");
const e4 = document.getElementById("i4");
 */


function seleccionar(sId) {
  const eId = document.getElementById(sId);
  document.addEventListener('keydown', function (event) {

      if (event.key === 'a') {
      return eId.style.backgroundColor = 'brown';
      }

      else if (event.key === 's') {
        return eId.style.backgroundColor = 'darkgreen';

      }

      else if (event.key === 'd') {
      return eId.style.backgroundColor = 'darkgrey';
      }
      })
}
