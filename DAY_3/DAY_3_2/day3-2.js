/* 
Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

Enter side a: 5
Enter side b: 4
Enter side c: 3
The perimeter of the triangle is 12
*/

let sideA = prompt("Introduce el lado A: ");
let sideB = prompt("Introduce el lado B: ");
let sideC = prompt("Introduce el lado C: ");

sideA = parseInt(sideA);
sideB = parseInt(sideB);
sideC = parseInt(sideC);

perimeter = (sideA + sideB + sideC);
console.log(perimeter);