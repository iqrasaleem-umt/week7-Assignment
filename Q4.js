"use strict";
// - Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a for loop to perform the conversion for each temperature
for (let c = 0; c <= 30; c += 5) {
    console.log("fehrenheit=", (9 / 5 * c) + 32);
}
let convertedtemperaturearray = [32, 41, 50, 59, 68, 77, 86];
