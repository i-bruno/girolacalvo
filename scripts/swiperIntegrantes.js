// Cargar el archivo JSON
fetch('./json/integrantesGirola.json')
  .then(response => response.json())
  .then(data => {
    // Ordenar los objetos por fecha de cumpleaños
    data.sort((a, b) => {
      // Convertir las fechas al formato MM-DD para compararlas correctamente
      const dateA = a.cumpleaños ? new Date(`2000-${a.cumpleaños.split('-').reverse().join('-')}`) : null;
      const dateB = b.cumpleaños ? new Date(`2000-${b.cumpleaños.split('-').reverse().join('-')}`) : null;
      return dateA - dateB;
    });

    // Obtener el contenedor swiper-wrapper
    const swiperWrapper = document.querySelector('.swiper-wrapper');

    // Iterar sobre cada integrante y crear un swiper-slide
    data.forEach(integrante => {
      // Crear el elemento swiper-slide
      const slide = document.createElement('div');
      slide.classList.add('swiper-slide');

      // Construir el contenido del swiper-slide con los datos del integrante
      slide.innerHTML = `
        <div class="integrante">
          <h2>${integrante.apodo}</h2>
          <p>Cumpleaños: ${integrante.cumpleaños}</p>
          <p>Cuerda: ${integrante.cuerda}</p>
          <p>Ingreso: ${integrante.ingreso}</p>
        </div>
      `;

      // Agregar el swiper-slide al contenedor swiper-wrapper
      swiperWrapper.appendChild(slide);
    });

    // Inicializar Swiper después de haber creado todos los swiper-slide
    const swiper = new Swiper('.swiper', {
                  // Optional parameters
                  direction: 'horizontal',
                  loop: true,
    });
  })
  .catch(error => {
    console.error('Error al cargar los datos:', error);
  });
