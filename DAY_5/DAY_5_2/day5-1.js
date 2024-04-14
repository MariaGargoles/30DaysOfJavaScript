/*Create a separate countries.js file and store the countries array in to this file, 
create a separate file web_techs.js and store the webTechs array in to this file. 
Access both file in main.js file*/

const countries = require('./countries');
const webTechs = require('./web_techs');

console.log("Countries:", countries);
console.log("Web Technologies:", webTechs);

//First remove all the punctuations and change the string to array and count the number of words in the array

let text ='I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let array = text.split(" ");
console.log(text.length)
console.log(array.length)

