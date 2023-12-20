import inquirer from "inquirer";
import chalk from "chalk";
import add from "./add.js";
import subtract from "./subtract.js";
import multiply from "./multiply.js";
import divide from "./division.js";
async function main() {
    const answer = await inquirer.prompt([
        {
            type: "number",
            name: "number1",
            message: "Please enter the first number"
        },
        {
            type: "number",
            name: "number2",
            message: "Please enter the second number"
        },
        {
            type: "list",
            name: "operator",
            message: "Please select the operations",
            choices: [
                { name: "add", value: add },
                { name: "subtract", value: subtract },
                { name: "multiply", value: multiply },
                { name: "divide", value: divide }
            ]
        },
    ]);
    console.log(chalk.red(answer.operator(answer.number1, answer.number2)));
}
let confirm;
do {
    await main();
    confirm = await inquirer.prompt([
        {
            type: "confirm",
            name: 'con',
            message: "Do you want to restart?"
        }
    ]);
} while (confirm.con);
