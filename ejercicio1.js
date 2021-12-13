//Seleccion de Basquetbolistas
alert('Vamos a seleccionar personas para el equipo de basquet por edad y estatura');

let aceptados = 0;
let rechazados = 0;

let numperson = Number(prompt('Número de personas'));

for (let i = 1; i <= numperson; i++){
    let edad = Number(prompt('Ingrese la edad:'));
    let altura = Number(prompt('Ingrese la estatura en cms.:'));

    if ((edad >= 18) && (altura >= 170)){
        aceptados = aceptados + 1;
    } else {
        rechazados = rechazados + 1;
    }
}

alert('El numero de aceptados es: ' + aceptados + '\n');
alert('El numero de rechazados es: ' + rechazados);