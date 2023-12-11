#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import { welcome } from "./welcome.js";
// welcome function
await welcome();
// to remove space between words and count words
function wordspace(para) {
    let wordspaces = /\s/g;
    let withoutspace = para.replace(wordspaces, '');
    return withoutspace.length;
}
;
// to count and show text
async function wordcount(wordspace) {
    var response = await inquirer.prompt([
        {
            name: "para",
            type: "input",
            message: `${chalk.green("Enter the Text: ")}`,
        }
    ]);
    // to print
    let formattedTextcount = chalk.yellow("word counts: ", wordspace(response.para));
    return console.log(formattedTextcount);
}
;
wordcount(wordspace);
