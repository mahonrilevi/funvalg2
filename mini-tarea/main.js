import { habilidades } from "./habilidades.js";

// Función para cargar y mostrar las habilidades
function cargarHabilidades() {
  const contenedor = document.querySelector('.grid.grid-cols-2');
  if (!contenedor || typeof habilidades === 'undefined') {
    console.error('No se encontró el contenedor de habilidades o las habilidades no están definidas.');
    return;
  }

  contenedor.innerHTML = ''; // Limpia el contenedor antes de añadir las habilidades

  habilidades.forEach(habilidad => {
    const a = document.createElement('a');
    a.href = habilidad.link;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.className = 'flex flex-col items-center'; // Añadir clases para centrar el contenido

    const img = document.createElement('img');
    img.src = habilidad.imagen;
    img.alt = habilidad.nombre;
    img.className = 'h-40 sm:h-44 md:h-48 transition-transform duration-300 hover:scale-105';

    const label = document.createElement('p');
    label.textContent = `${habilidad.nombre} (${habilidad.nivel})`;
    label.className = 'text-center text-sm mt-2 font-medium text-gray-700';

    a.appendChild(img);
    a.appendChild(label); // Añade el label con el nombre y nivel
    contenedor.appendChild(a);
  });
}

// Función para validar el formulario
function validarFormulario(event) {
  event.preventDefault(); // Previene el envío del formulario por defecto

  const nombreInput = document.getElementById('large-input');
  const emailInput = document.getElementById('base-input');
  const comentarioInput = document.getElementById('small-input');

  if (!nombreInput.value || !emailInput.value || !comentarioInput.value) {
    alert('Por favor, completa todos los campos.');
    return;
  }

  const datos = {
    nombre: nombreInput.value,
    email: emailInput.value,
    comentario: comentarioInput.value
  };

  console.log('📨 Datos del formulario enviados:');
  console.table(datos);

  // Aquí podrías añadir la lógica para enviar los datos, por ejemplo, con EmailJS
  // emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", datos)
  //   .then(function(response) {
  //      console.log('SUCCESS!', response.status, response.text);
  //      alert('Formulario enviado correctamente. ¡Gracias por tu mensaje!');
  //   }, function(error) {
  //      console.log('FAILED...', error);
  //      alert('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.');
  //   });

  alert('Formulario enviado correctamente. ¡Gracias por tu mensaje!');

  // Opcional: limpiar el formulario después del envío
  nombreInput.value = '';
  emailInput.value = '';
  comentarioInput.value = '';
}

// Event Listeners cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
  // Cargar las habilidades al iniciar
  cargarHabilidades();

  // Configurar el evento del formulario
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', validarFormulario);
  }

  // Animación del título
  const tituloPrincipal = document.querySelector('.lilita-one-regular');
  if (tituloPrincipal) {
    tituloPrincipal.addEventListener('mouseenter', () => {
      tituloPrincipal.style.color = '#38bdf8'; // Tailwind CSS blue-400
    });
    tituloPrincipal.addEventListener('mouseleave', () => {
      tituloPrincipal.style.color = ''; // Vuelve al color original
    });
  }

  // Lógica del botón del menú móvil
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
});