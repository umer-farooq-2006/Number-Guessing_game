#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 5 + 1);
const result = await inquirer.prompt([
    { name: "UserGuessedNumber",
        type: "number",
        message: "Please select number between 1 to 5" }
]);
if (result.UserGuessedNumber === randomNumber) {
    console.log("Congratulations! You guessed a correct number");
}
else {
    console.log("Sorry! You guessed a wronge number please try again");
}
