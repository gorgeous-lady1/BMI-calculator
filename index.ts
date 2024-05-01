#! /usr/bin/env node
import inquirer from "inquirer";



let weightinkg = 60;

let heightinmeter = 2

let BMI_result = weightinkg / (heightinmeter * heightinmeter)

console.log(BMI_result);
