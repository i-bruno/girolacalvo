fetch('./json/integrantesGirola.json')
  .then(response => response.json())
  .then(data => {
    // Obtener el contenedor swiper-wrapper
    const swiperWrapper = document.querySelector('.swiper-wrapper');

    // Obtener la fecha actual
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1; // Sumar 1 porque los meses en JavaScript van de 0 a 11
    const currentDay = currentDate.getDate();

    // Función para calcular la edad en días hasta el próximo cumpleaños
    function daysUntilNextBirthday(birthday) {
      const [birthdayMonth, birthdayDay] = birthday.split('-').map(Number);
      const nextBirthday = new Date(currentYear, birthdayMonth - 1, birthdayDay);
      if (nextBirthday < currentDate) {
        nextBirthday.setFullYear(currentYear + 1);
      }
      const diffTime = nextBirthday - currentDate;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays;
    }

    // Función para ordenar los integrantes por fecha de cumpleaños
    function sortByBirthday(a, b) {
      const daysUntilA = daysUntilNextBirthday(a.cumpleaños);
      const daysUntilB = daysUntilNextBirthday(b.cumpleaños);
      return daysUntilA - daysUntilB;
    }

    // Ordenar los integrantes por fecha de cumpleaños
    const integrantesOrdenados = Object.values(data).flat().sort(sortByBirthday);

    // Iterar sobre cada integrante y crear un swiper-slide
    integrantesOrdenados.forEach(integrante => {
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
        <div class="integrante d-flex">
          <div class="w-100">
            <h2 class="text-center">${integrante.apodo}</h2>
            ${cumpleanosHTML}
            <p class="text-center">Cuerda: ${integrante.cuerda}</p>
            <p class="text-center">Ingreso: ${integrante.ingreso}</p>
          </div>
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
