//Remove the middle IT company or companies from the array

let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

const removeCompany = itCompanies.shift(3);
console.log(itCompanies);

//Remove the last IT company from the array


const removesCompany = itCompanies.shift(6);
console.log(itCompanies);

//Remove all IT companies

const removCompany = itCompanies.shift(1,2,3,4,5,6);
console.log(itCompanies);
