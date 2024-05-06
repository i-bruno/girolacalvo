fetch('./json/integrantesGirola.json')
  .then(response => response.json())
  .then(data => {
    // Obtener el contenedor swiper-wrapper
    const swiperWrapper = document.querySelector('.swiper-wrapper');

    // Obtener la fecha actual
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1; // Sumar 1 porque los meses en JavaScript van de 0 a 11
    const currentDay = currentDate.getDate();

    // Iterar sobre cada clave (prima, sobreprima, segunda, director)
    Object.keys(data).forEach(clave => {
      // Ordenar los objetos por fecha de cumpleaños
      data[clave].sort((a, b) => {
        // Convertir las fechas al formato MM-DD para compararlas correctamente
        const dateA = a.cumpleaños ? new Date(`2000-${a.cumpleaños.split('-').reverse().join('-')}`) : null;
        const dateB = b.cumpleaños ? new Date(`2000-${b.cumpleaños.split('-').reverse().join('-')}`) : null;
        return dateA - dateB;
      });

      // Iterar sobre cada integrante de esta clave y crear un swiper-slide
      data[clave].forEach(integrante => {
        // Crear el elemento swiper-slide
        const slide = document.createElement('div');
        slide.classList.add('swiper-slide');

        // Construir el contenido del swiper-slide con los datos del integrante
        let cumpleanosHTML = `<p class="text-center">Cumpleaños: ${integrante.cumpleaños} `;
        // Verificar si es el cumpleaños de hoy
        if (integrante.cumpleaños) {
          const [day, month] = integrante.cumpleaños.split('-');
          if (parseInt(month, 10) === currentMonth && parseInt(day, 10) === currentDay) {
            cumpleanosHTML += `<span class="badge bg-danger ml-2">Hoy!</span>`;
          }
        }

        cumpleanosHTML += `</p>`;

        slide.innerHTML = `
          <div class="integrante d-flex ">
            <div class="w-100">
              <h2 class="text-center">${integrante.apodo}</h2>
              ${cumpleanosHTML}
              <p class="text-center">Cuerda: ${integrante.cuerda}</p>
              <p class="text-center">Ingreso: ${integrante.ingreso}</p>
            </div>
          </div>
        `;

      //   <div class="d-flex">
      //   <img src="${integrante.avatar}" class="avatar">
      // </div>

        // Agregar el swiper-slide al contenedor swiper-wrapper
        swiperWrapper.appendChild(slide);
      });
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
