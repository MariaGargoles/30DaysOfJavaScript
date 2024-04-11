//Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
let myAge = prompt("Enter your age: ");
let yourAge = 30;

let compAges = myAge - yourAge

if (myAge<yourAge) {
    console.log("I am", compAges, " years older than you.");
}else{
    console.log("You are", compAges," years older than me");
}