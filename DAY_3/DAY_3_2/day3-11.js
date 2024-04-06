/*
Compare your first name length and your family name length and you should get this output.

let firstName = 'Asabeneh'
let lastName = 'Yetayeh'

Your first name, Asabeneh is longer than your family name, Yetayeh

*/

let firstName = "Asabeneh";
let lastName = "Yetayeh";

if (firstName.length >= lastName.length) {
    console.log(`Tu nombre ${firstName} es más largo que tu apellido ${lastName}`);
} else {
    console.log("Otro");
}
