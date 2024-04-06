//Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

const pi = 3.1415;

let radius = prompt("Introduce el radio de tu circunferencia: ");
let area = (radius * radius)* pi;
let circumference = 2 * pi * radius;

console.log("El area de tu circurferencia es", area);
console.log("La circunferencia de tu circulo mide", circumference);