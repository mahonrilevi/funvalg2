const habilidadHTML = {
  nombre: "GITHUB",
  nivel: "Intermedio"
};

function mostrarHabilidad() {
  const contenedor = document.getElementById("infoHtml");

  contenedor.innerHTML = `
    <h2 class="text-xl font-bold text-gray-800 mb-2">${habilidadHTML.nombre}</h2>
    <p class="text-sm text-gray-600">Nivel de habilidad:</p>
    <p class="text-lg font-semibold text-blue-700 transition duration-300">${habilidadHTML.nivel}</p>
  `;
}

mostrarHabilidad();

// Agrega interactividad: clic sobre el carné cambia el nivel
document.getElementById("card").addEventListener("click", () => {
  habilidadHTML.nivel = habilidadHTML.nivel === "Intermedio" ? "Avanzado" : "Intermedio";
  mostrarHabilidad();
});