import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "input",
        name: "sentence",
        message: "Enter a sentence to count the word:"
    }
]);
const words = answers.sentence.trim().split(" ");
// const array = ['a', 'b', 'c', 'd', 'e', 'f']
console.log(words);
console.log(`Your Sentence word count is ${words.length}`);
