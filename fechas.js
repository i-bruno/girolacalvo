function calcularDiferenciaEnDias(fechaFutura) {
    // Obtenemos la fecha actual
    let fechaActual = new Date();

    // Convertimos la fecha futura a objeto Date si no lo es
    if (!(fechaFutura instanceof Date)) {
        fechaFutura = new Date(fechaFutura);
    }

    // Calculamos la diferencia en milisegundos
    let diferencia = fechaFutura.getTime() - fechaActual.getTime();

    // Convertimos la diferencia de milisegundos a días
    let dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

    return dias;
}

// Definimos las fechas futuras
let pujoleadaFecha = new Date('2024-04-23');
let festitapJunioFecha = new Date('2024-03-28');
let ecunhiFecha = new Date('2024-10-05');
let festitapDiciembreFecha = new Date('2024-12-13');


// Calculamos los días restantes y los mostramos en los badges
document.getElementById('pujoleada-badge').innerText = calcularDiferenciaEnDias(pujoleadaFecha) + ' días';
document.getElementById('festitap-junio-badge').innerText = calcularDiferenciaEnDias(festitapJunioFecha) + ' días';
document.getElementById('ecunhi-badge').innerText = calcularDiferenciaEnDias(ecunhiFecha) + ' días';
document.getElementById('festitap-diciembre-badge').innerText = calcularDiferenciaEnDias(festitapDiciembreFecha) + ' días';

// Ejemplo de uso:
// let fechaFutura = new Date('2024-05-01');
// let diasRestantes = calcularDiferenciaEnDias(fechaFutura);
// console.log('Días restantes hasta la fecha futura:', diasRestantes);