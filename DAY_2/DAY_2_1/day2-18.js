//Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:
//'You cannot end a sentence with because because because is a conjunction'

let str ="You cannot end a sentence with because because because is a conjunction";
const occBec =str.lastIndexOf("because");
console.log(occBec);