
function calcularDiferenciaEnDias(fechaFutura) {
    let fechaActual = new Date();
    if (!(fechaFutura instanceof Date)) {
        fechaFutura = new Date(fechaFutura);
    }
    let diferencia = fechaFutura.getTime() - fechaActual.getTime();
    let dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    return dias;
}

let fechas = [
    { fecha: new Date('2024-05-25'), badgeId: 'pujoleada-badge' },
    { fecha: new Date('2024-06-28'), badgeId: 'festitap-junio-badge' },
    { fecha: new Date('2024-10-05'), badgeId: 'ecunhi-badge' },
    { fecha: new Date('2024-12-13'), badgeId: 'festitap-diciembre-badge' }
];

let listaLi = document.querySelectorAll('.list-group-item');

fechas.forEach(fechaInfo => {
    let diasRestantes = calcularDiferenciaEnDias(fechaInfo.fecha);
    if (diasRestantes <= 0) {
        let siguienteFechaIndex = fechas.findIndex(fecha => calcularDiferenciaEnDias(fecha.fecha) > 0);
        if (siguienteFechaIndex !== -1) {
            listaLi[siguienteFechaIndex].classList.add('active');
        }
        listaLi[0].classList.remove('active');
    } else {
        document.getElementById(fechaInfo.badgeId).innerText = diasRestantes + ' días';
    }
});


// function calcularDiferenciaEnDias(fechaFutura) {
//     let fechaActual = new Date();
//     if (!(fechaFutura instanceof Date)) {
//         fechaFutura = new Date(fechaFutura);
//     }
//     let diferencia = fechaFutura.getTime() - fechaActual.getTime();
//     let dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
//     return dias;
// }

// // Definimos las fechas futuras
// let pujoleadaFecha = new Date('2024-05-25');
// let festitapJunioFecha = new Date('2024-06-28');
// let ecunhiFecha = new Date('2024-10-05');
// let festitapDiciembreFecha = new Date('2024-12-13');

// // Calculamos los días restantes y los mostramos en los badges
// let pujoleadaDias = calcularDiferenciaEnDias(pujoleadaFecha);
// let festitapJunioDias = calcularDiferenciaEnDias(festitapJunioFecha);
// let ecunhiDias = calcularDiferenciaEnDias(ecunhiFecha);
// let festitapDiciembreDias = calcularDiferenciaEnDias(festitapDiciembreFecha);

// // Obtenemos la lista de elementos li
// let listaLi = document.querySelectorAll('.list-group-item');

// // Verificamos si la fecha futura ya ha pasado Pujoleada
// if (pujoleadaDias <= 0) {
//     // Buscamos el próximo elemento li con fecha futura
//     for (let i = 1; i < listaLi.length; i++) {
//         let siguienteFecha = calcularDiferenciaEnDias(new Date(listaLi[i].textContent.split(': ')[1].trim()));
//         if (siguienteFecha > 0) {
//             listaLi[i].classList.add('active');
//             break;
//         }
//     }
//     // Removemos la clase active del elemento actual
//     listaLi[0].classList.remove('active');
// } else {
//     // Mostramos los días restantes en el badge
//     document.getElementById('pujoleada-badge').innerText = pujoleadaDias + ' días';
// }

// //Festitap

// if (festitapJunioDias <= 0) {
//     // Buscamos el próximo elemento li con fecha futura
//     for (let i = 1; i < listaLi.length; i++) {
//         let siguienteFecha = calcularDiferenciaEnDias(new Date(listaLi[i].textContent.split(': ')[1].trim()));
//         if (siguienteFecha > 0) {
//             listaLi[i].classList.add('active');
//             break;
//         }
//     }
//     // Removemos la clase active del elemento actual
//     listaLi[0].classList.remove('active');
// } else {
//     // Mostramos los días restantes en el badge
//     document.getElementById('festitap-junio-badge').innerText = festitapJunioDias + ' días';
// }

// //ECUNHI

//     if (ecunhiDias <= 0) {
//         // Buscamos el próximo elemento li con fecha futura
//         for (let i = 1; i < listaLi.length; i++) {
//             let siguienteFecha = calcularDiferenciaEnDias(new Date(listaLi[i].textContent.split(': ')[1].trim()));
//             if (siguienteFecha > 0) {
//                 listaLi[i].classList.add('active');
//                 break;
//             }
//         }
//         // Removemos la clase active del elemento actual
//         listaLi[0].classList.remove('active');
//     } else {
//         // Mostramos los días restantes en el badge
//         document.getElementById('ecunhi-badge').innerText = ecunhiDias + ' días';
//     }

//     //Festitap Diciembre

//     if (festitapDiciembreDias <= 0) {
//         // Buscamos el próximo elemento li con fecha futura
//         for (let i = 1; i < listaLi.length; i++) {
//             let siguienteFecha = calcularDiferenciaEnDias(new Date(listaLi[i].textContent.split(': ')[1].trim()));
//             if (siguienteFecha > 0) {
//                 listaLi[i].classList.add('active');
//                 break;
//             }
//         }
//         // Removemos la clase active del elemento actual
//         listaLi[0].classList.remove('active');
//     } else {
//         // Mostramos los días restantes en el badge
//         document.getElementById('festitap-diciembre-badge').innerText = festitapDiciembreDias + ' días';
//     }


// // Repetimos el mismo proceso para las otras fechas futuras...
// // (Código similar para las otras fechas futuras)
