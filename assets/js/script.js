function pintar(color = 'green') {
    let elemento = document.getElementById("ele1");
        elemento = elemento.style.backgroundColor = color;
        return elemento;
}