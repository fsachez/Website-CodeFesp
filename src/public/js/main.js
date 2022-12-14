const grid = new Muuri(".grid", {
  layout: {
    rounding: false,
  },
});

window.addEventListener("load", () => {
  grid.refreshItems().layout();
  document.getElementById("grid").classList.add("imagenes-cargadas");

  // Agragamos los listener de los enlaces para filtrar por categoria.
  const enlaces = document.querySelectorAll("#categorias a");
  enlaces.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
      evento.preventDefault();
      enlaces.forEach((enlace) => enlace.classList.remove('activo'));
      evento.target.classList.add("activo");

      const categoria = evento.target.innerHTML.toLowerCase();
      categoria === 'todos' ? grid.filter('[data-categoria]') : grid.filter(`[data-categoria="${categoria}"]`);
    });
  });

  // Agregamos el listener para la barra de buscqueda.
  document.querySelector('#barra-busqueda').addEventListener('input', (evento) => {
    const busqueda = evento.target.value;
    grid.filter((item) => item.getElement().dataset.etiquetas.includes(busqueda));
  });

  // Agregamos el listener para las imagenes.
  const overlay = document.getElementById('overlay');
  document.querySelectorAll('.grid .item img').forEach((elemento) => {
    elemento.addEventListener('click', () => {
      const ruta = elemento.getAttribute('src');
      const descripcion = elemento.parentNode.parentNode.dataset.descripcion;
      const linkredird = elemento.parentNode.parentNode.dataset.linkredird;
      overlay.classList.add('activo');
      document.querySelector('#overlay img').src = ruta;
      document.querySelector('#overlay .descripcion').innerHTML = descripcion;
      document.querySelector('#overlay a').href = linkredird
    });
  });

  // EvenListener del botón de cerrar.
  document.querySelector('#btn-cerrar-popup').addEventListener('click', () => {
    overlay.classList.remove('activo');
  });

  // EvenListener del overlay.
  overlay.addEventListener('click', (evento) => {
    evento.target.id === 'overlay' ? overlay.classList.remove('activo') : ''; 
  });



});







