document.addEventListener("DOMContentLoaded", inicializarCarrouselTexto);

function inicializarCarrouselTexto() {
  const textos = [
    "...vestibulum ante nec condimentum dictum",
    "...saepe error officiis dolor praesentium nisi optio",
    "...consequatur earum eaque inventore, rerum dolores ullam"
  ];
  
  const carrouselText = document.getElementById("carrousel-text");
  
  function cambiarTexto() {
    const textoAleatorio = textos[Math.floor(Math.random() * textos.length)];
    carrouselText.textContent = textoAleatorio;
  }

  setInterval(cambiarTexto, 2000);
}