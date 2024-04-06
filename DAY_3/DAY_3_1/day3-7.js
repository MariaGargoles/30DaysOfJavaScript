//Use the Date object to do the following activities

/*


Use the Date object to do the following activities

    1. What is the year today?
    2. What is the month today as a number?
    3. What is the date today?
    4. What is the day today as a number?
    5. What is the hours now?
    6. What is the minutes now?
    7. Find out the numbers of seconds elapsed from January 1, 1970 to now.




*/
//1
let now = new Date();
let year = now.getFullYear();
console.log(year);

//2
let now2 = new Date;
//Añadimos un +1 ya que JS cuenta 0 como Enero y deberia ser 1.
let moth = now2.getMonth()+1;
console.log(moth);

//3
let now3 = new Date();
console.log(now3);

//4
let now4 = new Date();
let day = now4.getDay();
console.log(day);

//5
let now5 = new Date();
console.log(now5);
//Se ha añadido comprobante a la priemra variable porque la hora esta en otro UTC
let hour = now5.getHours();
console.log(hour);

//6
let now6 = new Date();
let minutes = now6.getMinutes();
console.log(minutes);

//7
//XXXXXXXXXXXX