//Change each company name to uppercase one by one and print them out

    let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

//Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
  console.log(itCompanies);

//Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found


  if (itCompanies.includes(Google)){
    console.log("exist")
  }else{
    console.log ("is not found")
  }
//Filter out companies which have more than one 'o' without the filter method

for (let posicionCompañia = 0; posicionCompañia < itCompanies.length; posicionCompañia++) {
    let company = itCompanies[posicionCompañia] 
    let numero_de_o = 0

    for (let posicionLetra = 0; posicionLetra < itCompaniesa.lengthpany.length; posicionLetra++){
        let letra = itCompanies[posicionLetra]
        if (letra === "o"){
            numero_de_o = numero_de_o + 1   
        }
    }

    if (numero_de_o > 1)
        console.log(company)
    }

//Sort the array using sort() method
let itCompaniesfilter = itCompanies.sort();