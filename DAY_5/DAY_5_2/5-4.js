const countries = require('./countries');

if (!countries.includes("ethiopia")){
    countries.push("Ethiopia")
}else{
    console.log("Exist")
}
console.log(countries)