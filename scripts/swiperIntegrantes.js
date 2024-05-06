fetch("./json/integrantesGirola.json")
.then((response) => response.json())
.then((data) => {
    // Obtener el contenedor swiper-wrapper
    const swiperWrapper = document.querySelector(".swiper-wrapper");

    // Iterar sobre cada clave (prima, sobreprima, segunda, director)
    Object.keys(data).forEach((clave) => {
      // Ordenar los objetos por fecha de cumpleaños
    data[clave].sort((a, b) => {
        // Convertir las fechas al formato MM-DD para compararlas correctamente
        const dateA = a.cumpleaños
        ? new Date(`2000-${a.cumpleaños.split("-").reverse().join("-")}`) : null;
        const dateB = b.cumpleaños
        ? new Date(`2000-${b.cumpleaños.split("-").reverse().join("-")}`) : null;
        return dateA - dateB;
    });

      // Iterar sobre cada integrante de esta clave y crear un swiper-slide
    data[clave].forEach((integrante) => {
        // Crear el elemento swiper-slide
        const slide = document.createElement("div");
        slide.classList.add("swiper-slide");

        // Construir el contenido del swiper-slide con los datos del integrante
        slide.innerHTML = `
        <div class="integrante d-flex justify-content-between">
            <div>
            <h2>${integrante.apodo}</h2>
            <p>Cumpleaños: ${integrante.cumpleaños}</p>
            <p>Cuerda: ${integrante.cuerda}</p>
            <p>Ingreso: ${integrante.ingreso}</p>
            </div>
        </div>
        `;

        // Se deja este bloque para agregar cuando se incorporen los avatar
        // <div class="d-flex">
        // <img src="${integrante.avatar}" class="avatar">
        // </div>

        // Agregar el swiper-slide al contenedor swiper-wrapper
        swiperWrapper.appendChild(slide);
    });
    });

    // Inicializar Swiper después de haber creado todos los swiper-slide
    const swiper = new Swiper(".swiper", {
      // Optional parameters
    direction: "horizontal",
    loop: true,
    });
})
.catch((error) => {
    console.error("Error al cargar los datos:", error);
});
