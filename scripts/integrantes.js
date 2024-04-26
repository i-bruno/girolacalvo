
document.addEventListener('DOMContentLoaded', function () {
    // Fetch del archivo JSON
    fetch('./json/integrantesGirola.json')
        .then(response => response.json())
        .then(data => {
            const swiperWrapper = document.getElementById('swiper-wrapper');

            // Iterar sobre los datos del JSON y crear swiper-slide para cada integrante
            data.forEach(integrante => {
                const slide = document.createElement('div');
                slide.classList.add('swiper-slide');
                slide.innerHTML = `
                <h5>Nombre:</h5>
                <p>${integrante.nombre}</p>
                <h5>Cumpleaños:</h5>
                <p>${integrante.cumpleaños}</p>
                <h5>Cuerda:</h5>
                <p>${integrante.cuerda}</p>
            `;
                swiperWrapper.appendChild(slide);
            });

            // Inicializar Swiper después de haber agregado todos los swiper-slide
            const swiper = new Swiper('.swiper-container', {
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            });
        })
        .catch(error => console.error('Error al cargar los datos:', error));
});
