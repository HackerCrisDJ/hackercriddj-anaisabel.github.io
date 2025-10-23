alert("Bienvenida Ana Isabel Vizarro Barrera. La chica más guapa del mundo y de toda la galaxia. Soy Charllote_Hack_Bot, creada por Cristian, tu novio querido");
function crearCorazon() {
  const corazon = document.createElement("div");
  corazon.classList.add("corazon");

  // Posición aleatoria horizontal
  corazon.style.left = Math.random() * window.innerWidth + "px";

  // Posición vertical inicial
  corazon.style.top = window.innerHeight + "px";

  document.body.appendChild(corazon);

  // Eliminar el corazón después de la animación
  setTimeout(() => {
    corazon.remove();
  }, 4000);
}

// Opcional: generar corazones automáticamente cada segundo
setInterval(crearCorazon, 1000);
