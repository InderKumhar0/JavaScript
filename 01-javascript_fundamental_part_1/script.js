/*
///// Values and Variables
// console.log("inder");
// console.log(23)
// let firstName = "inder";
// console.log(firstName)

//// Variable name convention
// let inder_kumhar = "ik"
// let $function = 56
// console.log($function);
// let person = "inder";
// console.log(person);


//// Data Types
// let javascriptIsFun = true;
// console.log(javascriptIsFun);
// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 'inder');
// javascriptIsFun = 'YES!'
// console.log(typeof javascriptIsFun)
// let year;
// year = 1991
// console.log(year)
// console.log(typeof year);


///////////////////////////////////////
// let, const and var
// let age = 30
// age = 31;
// console.log(age)

// const birthYear = 2001;
// // birthYear = 2000;
// console.log(birthYear);

// {
//   var job = 'programmer';
//   job = 'teacher';
// }
// console.log(job);

//////////////////////////////
// Basic Operators
// Math Operators
// const now = 2023;
// const myAge = now - 2001;
// const brotherage = now - 2003;
// console.log(myAge, brotherage);

// const firstName = 'inder';
// const lastName = 'kumhar';
// console.log(firstName +' '+ lastName);


////// Assignment operator
// let x = 15 + 5; //20
// x += 10; // x = x + 10 = 30
// x *= 4; // x = x * 4 = 120
// x++; // x = x + 1
// x--;
// x--;
// console.log(x);

///// Comparison operator
// const age1 = 28;
// const age2 = 23;
// console.log(age1 > age2); 
// console.log(age1 >= 27);
// console.log(age1 == age2);

////Operator Precedence
// let x,y;
// x = y = 25 - 10 - 5;
// console.log(x, y);

// const a = 5 * 20 / 4 + 1 -4;
// console.log(a);

*/

////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.9;

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
console.log(BMIMark);
const BMIJohn = massJohn / heightJohn ** 2;
console.log(BMIJohn)
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);
