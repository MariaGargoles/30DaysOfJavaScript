//Reverse the array using reverse() method

let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
let filCompanies = itCompanies.reverse();
console.log(filCompanies);

//Slice out the first 3 companies from the array

const ThreeCompanies = itCompanies.slice(0, 3);
console.log(ThreeCompanies);

//Slice out the last 3 companies from the array
const CompaniesThree = itCompanies.slice(3, 6);
console.log(CompaniesThree);

//Slice out the middle IT company or companies from the array

const ThreesCompanies = itCompanies.slice(3);
console.log(ThreesCompanies);

//Remove the first IT company from the array
const removeCompany = itCompanies.shift(1);
console.log(itCompanies);