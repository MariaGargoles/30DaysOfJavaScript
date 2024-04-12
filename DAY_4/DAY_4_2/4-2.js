/*Check if the season is Autumn, Winter, Spring or Summer. If the user input is :

September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer*/

let spring = ['Marzo', 'Abril', 'Mayo'];
let summer = ['Junio', 'Julio', 'Agosto'];
let autumn = ['Septiembre', 'Octubre', 'Noviembre'];
let winter = ['Diciembre', 'Enero', 'Febrero'];

let season = prompt("En que mes del año estamos: ")

if (spring.includes(season)){
    console.log("Es primavera")
} else if (summer.includes(season)){
    console.log("Es verano")
}else if (autumn.includes(season)){
    console.log("Es Otoño")
}else if (winter.includes(season)){
    console.log("Es Invierno")
}else{
    console.log("Incorrecto")
}    


