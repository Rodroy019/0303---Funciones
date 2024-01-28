//salucion a 4_colores (desafio 3.3)

let black = (e) => e.target.style.backgroundColor = 'black';

const dB = document.getElementById("b1"); 
const dR = document.getElementById("r2"); 
const dG = document.getElementById("g3"); 
const dY = document.getElementById("y4"); 

dB.addEventListener("click", black);
dR.addEventListener("click", black);
dG.addEventListener("click", black);
dY.addEventListener("click", black);