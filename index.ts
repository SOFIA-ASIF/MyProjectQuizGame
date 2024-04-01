#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
console.clear();
console.log(chalk.red("Welcome to TypeScript Quiz :)"));
let out = chalk.bold.italic.bgCyan("out");
console.log(`How to play:
If you get any question wrong you will be ${out}
so let's start the game`);

let score = 0;
let name1 = await inquirer.prompt([
  {
    name: "name",
    message: "Enter your name: ",
    type: "input",
  },
]);
let quizQuestion = [
  {
    question: "What is TypeScript?",
    choices: [
      "A superset of JavaScript",
      "A subset of JavaScript",
      "A replacement for JavaScript",
      "A style of coding in JavaScript",
    ],
    correctAnswer: "A superset of JavaScript",
  },
  {
    question: "Which keyword is used to declare a variable in TypeScript?",
    choices: ["var", "let", "int", "All of the above"],
    correctAnswer: "let",
  },
  {
    question: 'What does "type inference" mean in TypeScript?',
    choices: [
      "Automatically determining the type of a variable based on its value.",
      "Explicitly specifying the type of a variable using annotations.",
      "A feature in TypeScript that allows inferring types from TypeScript libraries.",
      "A concept unrelated to TypeScript.",
    ],
    correctAnswer:
      "Automatically determining the type of a variable based on its value.",
  },
  {
    question: "Which of the following is NOT a benefit of using TypeScript?",
    choices: [
      "Improved code readability",
      "Early error detection",
      "Better tooling support",
      "Faster runtime performance",
    ],
    correctAnswer: "Faster runtime performance",
  },
  {
    question: "What is the purpose of using interfaces in TypeScript?",
    choices: [
      "To define object types",
      "To create class blueprints",
      "To implement inheritance",
      "All of the above",
    ],
    correctAnswer: "All of the above",
  },
  {
    question:
      'What is the difference between "null" and "undefined" in JavaScript?',
    choices: [
      "'null' represents the absence of a value, while 'undefined' indicates a variable that has been declared but not assigned a value.",
      "They are the same.",
      "'null' represents a defined value that is empty, while 'undefined' indicates the absence of a value.",
      "'null' is used for numbers, while 'undefined' is used for strings.",
    ],
    correctAnswer:
      "'null' represents the absence of a value, while 'undefined' indicates a variable that has been declared but not assigned a value.",
  },
  {
    question: "What is the purpose of using generics in TypeScript?",
    choices: [
      "To create reusable components with type safety",
      "To define specific types for variables",
      "To restrict the types of function parameters",
      "None of the above",
    ],
    correctAnswer: "To create reusable components with type safety",
  },
  {
    question: "Which of the following is a valid TypeScript union type?",
    choices: [
      "string | number",
      "string & number",
      "string + number",
      "string * number",
    ],
    correctAnswer: "string | number",
  },
  {
    question:
      "Which configuration file is commonly used to configure TypeScript projects?",
    choices: [
      "tsconfig.json",
      "package.json",
      "webpack.config.js",
      "babel.config.json",
    ],
    correctAnswer: "tsconfig.json",
  },
  {
    question:
      "How can you ensure type safety in JavaScript code without using TypeScript?",
    choices: [
      "By writing comprehensive unit tests.",
      "By using JSDoc annotations.",
      "By using linting tools like ESLint.",
      "All of the above.",
    ],
    correctAnswer: "All of the above.",
  },
];
for (let i = 0; i < quizQuestion.length; i++) {
  let askingQuestion = await inquirer.prompt([
    {
      name: "question",
      message: quizQuestion[i].question,
      type: "list",
      choices: quizQuestion[i].choices,
    },
  ]);
  if (askingQuestion.question == quizQuestion[i].correctAnswer) {
    console.log("Correct Answer");
    score++;
  } else {
    console.log("Incorrect Answer");
    break;
  }
}
console.log(`${name1.name} Your total score is ${score} out of 10`);
