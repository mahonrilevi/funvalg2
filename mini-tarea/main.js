import { habilidades } from "./habilidades.js";

function cargarHabilidades() {
  const contenedor = document.querySelector('.grid.grid-cols-2');
  if (!contenedor || typeof habilidades === 'undefined') {
    console.error('No se encontró el contenedor de habilidades o las habilidades no están definidas.');
    return;
  }

  contenedor.innerHTML = ''; 

  habilidades.forEach(habilidad => {
    const a = document.createElement('a');
    a.href = habilidad.link;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.className = 'flex flex-col items-center'; 

    const img = document.createElement('img');
    img.src = habilidad.imagen;
    img.alt = habilidad.nombre;
    img.className = 'h-40 sm:h-44 md:h-48 transition-transform duration-300 hover:scale-105';

    const label = document.createElement('p');
    label.textContent = `${habilidad.nombre} (${habilidad.nivel})`;
    label.className = 'text-center text-sm mt-2 font-medium text-gray-700';

    a.appendChild(img);
    a.appendChild(label); 
    contenedor.appendChild(a);
  });
}


function validarFormulario(event) {
  event.preventDefault(); 

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



  alert('Formulario enviado correctamente. ¡Gracias por tu mensaje!');

 
  nombreInput.value = '';
  emailInput.value = '';
  comentarioInput.value = '';
}
document.addEventListener('DOMContentLoaded', () => {
 
  cargarHabilidades();

  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', validarFormulario);
  }
  const tituloPrincipal = document.querySelector('.lilita-one-regular');
  if (tituloPrincipal) {
    tituloPrincipal.addEventListener('mouseenter', () => {
      tituloPrincipal.style.color = '#38bdf8'; 
    });
    tituloPrincipal.addEventListener('mouseleave', () => {
      tituloPrincipal.style.color = '';
    });
  }
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
});