//Access the 'JavaScript' string characters using a random number.

const str = "JavaScript";


const randomIndex = Math.floor(Math.random() * str.length); 
//Genera un numero aleatorio con el maximo de la cadena del str
console.log(randomIndex);

const randomChar = str.charAt(randomIndex); 
//toma el numero de indice aleatorio y lo asigna a su caracter aleatorio
console.log(randomChar); 