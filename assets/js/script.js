// solucion a pintar (desafio 3.2)

function pintar(ele, color = 'green') {
    ele.style.backgroundColor = color;
}

const ele = document.getElementById("ele1"); 
ele.addEventListener("click", () => pintar(ele, 'yellow'));

