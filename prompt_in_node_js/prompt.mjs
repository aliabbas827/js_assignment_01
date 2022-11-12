import promptSync from 'prompt-sync';
const prompt = promptSync();

let capital = prompt(`What is the capital of Pakistan:`)
console.log(capital);

let n_1 = Number(prompt(`Enter first number:`));
let n_2 = Number(prompt(`Enter second number:`));

let sum = n_1 + n_2;
console.log (`Sum of both numbers is ${sum}`);