//Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

let str = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
let itCompanies = str.split(" ");

//Print the array using console.log()
console.log(itCompanies);
//Print the number of companies in the array
console.log(itCompanies.length)
//Print the first company, middle and last company
console.log(itCompanies[1]);
console.log(itCompanies[3]);
console.log(itCompanies[6]);
//Print out each company
itCompanies.forEach(function(company) {
    console.log(company)});