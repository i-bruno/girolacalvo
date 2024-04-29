// Data from JSON file
const jsonData = [
  // Your JSON data goes here
];

// Function to parse date strings in format "dd-mm"
function parseDate(dateString) {
const [day, month] = dateString.split("-").map(Number);
  // Month is 0-indexed in JavaScript Date objects, so subtract 1
return new Date(new Date().getFullYear(), month - 1, day);
}

// Sort JSON data by birth date in ascending order
jsonData.sort((a, b) => parseDate(a.cumpleaños) - parseDate(b.cumpleaños));

// Function to generate swiper slides
function generateSwiperSlides(data) {
    const swiperWrapper = document.getElementById('swiper-wrapper');
    const totalSlides = data.length;

    // Duplicating slides to ensure enough slides for loop mode
    const duplicatedData = [...data, ...data];

    duplicatedData.forEach(person => {
        const slide = document.createElement('div');
        slide.classList.add('swiper-slide');
        slide.innerHTML = `
            <h5>Nombre:</h5>
            <p>${person.nombre} ${person.apellido}</p>
            <h5>Cumpleaños:</h5>
            <p>${person.cumpleaños}</p>
            <h4>Cuerda:</h5>
            <p>${person.cuerda}</p>
        `;
        swiperWrapper.appendChild(slide);
    });
}
