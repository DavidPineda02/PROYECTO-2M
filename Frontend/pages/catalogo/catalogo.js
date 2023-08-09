const opciones = document.querySelectorAll(".dropdown-item");
const contenidoCambiante = document.getElementById("contenidoCambiante");
import obtenerContenidoHombre from "./hombre.js"
import obtenerContenidoMujer from "./mujer.js"
import obtenerContenidoNiño from "./niño.js"
import obtenerContenidoNiña from "./niña.js"

opciones.forEach((opcion) => {
   opcion.addEventListener("click", function (event) {
      event.preventDefault();
      const categoria = opcion.getAttribute("data-categoria");
      cambiarContenido(categoria);
   });
});

function cambiarContenido(categoria) {
   let nuevoContenido = obtenerContenidoPorCategoria(categoria);
   contenidoCambiante.innerHTML = nuevoContenido;
}

function obtenerContenidoPorCategoria(categoria) {
   if (categoria === "hombre") {
      return obtenerContenidoHombre();
   } else if (categoria === "mujer") {
      return obtenerContenidoMujer();
   } else if (categoria === "niño") {
      return obtenerContenidoNiño();
   } else if (categoria === "niña") {
      return obtenerContenidoNiña();
   } else {
      return alert("Error 404")
   }
}

