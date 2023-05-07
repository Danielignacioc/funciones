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
