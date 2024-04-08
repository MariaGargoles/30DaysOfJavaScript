/*Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

Enter birth year: 1995
You are 25. You are old enough to drive

Enter birth year: 2005
You are 15. You will be allowed to drive after 3 years.*/


//Para conseguir el año actual
let now = new Date();
let year = now.getFullYear();
//Para conseguir por prompt el año de nacimiento de la persona
let age = parseInt(prompt("Enter birth year: "));
//Obtenemos su edad
let restAge = year - age;

//Obtenemos el año en el que tendria 18
let enoughAge = age+ 18;
console.log(enoughAge);
console.log(restAge);
// Obtenemos el resto de su edad hatsa los 18
let minAge = (enoughAge - year); 


if (restAge >= 18) {
    console.log("You are ", restAge,". You are old enough to drive.");
}else{ (restAge <= 18); 
    
    console.log("You are", restAge, "You will allowed to drive after, ", minAge, "years");}
