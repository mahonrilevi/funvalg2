function cargarHabilidades() {
  const contenedor = document.querySelector('.grid.grid-cols-2');
  if (!contenedor || typeof habilidades === 'undefined') return;

  contenedor.innerHTML = ''; 

  habilidades.forEach(habilidad => {
    const a = document.createElement('a');
    a.href = habilidad.link;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';

    const img = document.createElement('img');
    img.src = habilidad.imagen;
    img.alt = habilidad.nombre;
    img.className = 'h-40 sm:h-44 md:h-48 transition-transform duration-300 hover:scale-105';

    a.appendChild(img);
    contenedor.appendChild(a);
  });
}
function validarFormulario() {
  const nombre = document.getElementById('large-input');
  const email = document.getElementById('base-input');
  const comentario = document.getElementById('small-input');

  if (!nombre.value || !email.value || !comentario.value) {
    alert('Por favor, completa todos los campos.');
    return false;
  }
  const datos = {
    nombre: nombre.value,
    email: email.value,
    comentario: comentario.value
  };

  console.log('📨 Datos del formulario enviados:');
  console.table(datos);

  alert('Formulario enviado correctamente. ¡Gracias por tu mensaje!');
  return true;
}
document.addEventListener('DOMContentLoaded', () => {
  cargarHabilidades(); 
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const esValido = validarFormulario();
      if (esValido) {
      }
    });
  }
  window.addEventListener('resize', () => {
    console.log('Tamaño actual:', window.innerWidth);
  });

  const titulo = document.querySelector('h1');
  if (titulo) {
    titulo.addEventListener('mouseenter', () => {
      titulo.style.color = '#38bdf8'; 
    });
    titulo.addEventListener('mouseleave', () => {
      titulo.style.color = ''; 
    });
  }
});