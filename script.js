const body = document.querySelector("body");

function createFallingElement() {
  let element = document.createElement("i"); 
  element.className = "copo";
  element.style.left = Math.random() * innerWidth + "px"; // Posición inicial horizontal aleatoria
  
  let size = (Math.random() * 8) + 2;
  element.style.width = size + "px";
  element.style.height = size + "px";

  let delay = Math.random() * 5;
  element.style.animationDelay = delay + "s";
  
  let anima = (Math.random() * 3) + 5;
  element.style.animationDuration = anima + "s";
  
  body.appendChild(element);

  setTimeout(() => {
    element.remove(); // Elimina el elemento después de cierto tiempo
  }, anima * 1000);
}

setInterval(createFallingElement, 50);