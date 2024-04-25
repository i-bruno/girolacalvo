// function calcularDiferenciaEnDias(fechaFutura) {
//     // Obtenemos la fecha actual
//     let fechaActual = new Date();

//     // Convertimos la fecha futura a objeto Date si no lo es
//     if (!(fechaFutura instanceof Date)) {
//         fechaFutura = new Date(fechaFutura);
//     }

//     // Calculamos la diferencia en milisegundos
//     let diferencia = fechaFutura.getTime() - fechaActual.getTime();

//     // Convertimos la diferencia de milisegundos a días
//     let dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

//     return dias;
// }


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


// // Definimos las fechas futuras
// let pujoleadaFecha = new Date('2024-05-25');
// let festitapJunioFecha = new Date('2024-06-28');
// let ecunhiFecha = new Date('2024-10-05');
// let festitapDiciembreFecha = new Date('2024-12-13');


// // Calculamos los días restantes y los mostramos en los badges
// document.getElementById('pujoleada-badge').innerText = calcularDiferenciaEnDias(pujoleadaFecha) + ' días';
// document.getElementById('festitap-junio-badge').innerText = calcularDiferenciaEnDias(festitapJunioFecha) + ' días';
// document.getElementById('ecunhi-badge').innerText = calcularDiferenciaEnDias(ecunhiFecha) + ' días';
// document.getElementById('festitap-diciembre-badge').innerText = calcularDiferenciaEnDias(festitapDiciembreFecha) + ' días';

// Ejemplo de uso:
// let fechaFutura = new Date('2024-05-01');
// let diasRestantes = calcularDiferenciaEnDias(fechaFutura);
// console.log('Días restantes hasta la fecha futura:', diasRestantes);