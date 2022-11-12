let array = [12, 13, 16, 19];
let First_Val = array[0];
let new_arr = [];
let sol = [];
let Last_Val = array[array.length - 1];
for (let i = First_Val; i <= Last_Val; i++) 
{ new_arr.push(i);}
new_arr.forEach((number, index) => {
    if (!array.includes(number)) {
        sol.push(`Missing number on index ${index} is ${number}`);
    }
});console.log(sol.join("\n"));