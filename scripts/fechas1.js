// Carga el archivo JSON y realiza el procesamiento de los datos
fetch("./json/agendaGirola.json")
    .then((response) => response.json())
    .then((data) => {
        const eventosList = document.getElementById("eventos-list");

        // Recorre los datos del archivo JSON y crea dinámicamente los elementos <li>
        data.forEach((evento) => {
            const li = document.createElement("li");
            const h6 = document.createElement("h6");
            const cuando = document.createElement("p");
            const donde = document.createElement("p");
            const span = document.createElement("span");
            const button = document.createElement("button");

            li.classList.add("list-group-item");
            h6.classList.add("titEvento");
            cuando.classList.add("cuandoEvento");
            donde.classList.add("dondeEvento");
            span.classList.add("badge", "bg-secondary");
            span.setAttribute("id", `${evento.id}`);
            button.classList.add("btnCopy");

            h6.innerHTML = `${evento.titEvento}`;
            cuando.innerHTML = `¿Cuando?: ${formatoFechaArgentina(evento.fecha)} - ${evento.horario}`;
            donde.innerHTML = `¿Donde?: ${evento.direccion} - ${evento.lugar}`;
            span.innerHTML = "";
            button.innerHTML="Compartir";

            // Agrega el elemento <li> al elemento <ul>
            eventosList.appendChild(li);
            li.appendChild(h6);
            li.appendChild(cuando);
            li.appendChild(donde);
            li.appendChild(span);
            li.appendChild(button);

            // Calcula los días restantes y establece el contenido y color del badge
            establecerBadge(new Date(evento.fecha), evento.id);
        });
    })
    .catch((error) => console.error("Error al cargar el archivo JSON:", error));

// Función para calcular la diferencia en días y establecer el contenido y color del badge
function establecerBadge(fechaFutura, idBadge) {
    // Obtenemos la fecha actual
    let fechaActual = new Date();

    // Convertimos la fecha futura a objeto Date si no lo es
    if (!(fechaFutura instanceof Date)) {
        fechaFutura = new Date(fechaFutura);
    }

    // Ajustamos las fechas al huso horario local
    fechaActual.setHours(0, 0, 0, 0);
    fechaFutura.setHours(0, 0, 0, 0);

    // Calculamos la diferencia en milisegundos
    let diferencia = fechaFutura.getTime() - fechaActual.getTime();

    // Convertimos la diferencia de milisegundos a días
    let dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    console.log(dias);

    const badge = document.getElementById(idBadge);

    if (dias > 0) {
        badge.innerText = dias + " días";
    } else if (dias === 0) {
        badge.innerText = "Hoy";
    } else {
        badge.innerText = "Pasado";
    }

    // Aplicar estilos al badge según la situación
    if (dias === 0) {
        badge.classList.remove("bg-secondary");
        badge.classList.add("bg-danger");
    } else if (dias < 0) {
        badge.classList.remove("bg-secondary");
        badge.classList.add("bg-success");
    } else {
        badge.classList.remove("bg-danger", "bg-success");
        badge.classList.add("bg-secondary");
    }
}

// Función para formatear la fecha en formato argentino (dd/mm/yyyy)
function formatoFechaArgentina(fecha) {
    const fechaFormateada = new Date(fecha);
    return fechaFormateada.toLocaleDateString("es-AR");
}
