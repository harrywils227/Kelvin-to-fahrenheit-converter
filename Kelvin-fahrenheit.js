// Forcast today in Kelvin
const kelvin = 273;
// kelvin converted to celsius
const celsius = kelvin - 273;
// conversion of celsius to fahrenheit
let fahrenheit = celsius * (9/5) + 32;
/* if the result returns a decimal me use Math.floor to round down */
fahrenheit
= Math.floor(fahrenheit);
/* We use template literals and string interpolation to add the variable to the string */
console.log(`The temperature is ${fahrenheit} degrees fahrenheit`);
