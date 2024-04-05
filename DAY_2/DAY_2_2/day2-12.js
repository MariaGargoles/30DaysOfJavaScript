//Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'

let str = "You cannot end a sentence with because because because is a conjunction";

let sbstr ="because because because";

let slicedPh = str.substr(str.indexOf(sbstr), sbstr.length);
console.log(slicedPh);

// no