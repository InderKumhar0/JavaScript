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

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// console.log(BMIMark);
// const BMIJohn = massJohn / heightJohn ** 2;
// console.log(BMIJohn)
// const markHigherBMI = BMIMark > BMIJohn;
// console.log(BMIMark, BMIJohn, markHigherBMI);

////////////////////////////////////////////////////////////////////////////////
// String and Template Literals

// const firstName = 'inder';
// const job = 'programmer';
// const birthYear = 2001;
// const year = 2023

// const inder = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
// console.log(inder);

// const inderNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(inderNew);

// console.log('String with \n\
// multiple \n\
// lines');

// console.log(`String
// multiple
// lines`);

////////////////////////////////////////////////////////////////////////////////
// Taking Decisions if / else Statements
// const age = 15;
// if(age > 18) {
//     console.log('you can start driving license 🚗');
// }
// else {
//     const yearsLeft = 18 - age;
//     console.log(`you are too yong, Wait anoter ${yearsLeft} year`);
// }

/////////////////////////////////////////////////////////////////////////////////
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.9;

// // const massMark = 95;
// // const heightMark = 1.88;
// // const massJohn = 85;
// // const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// console.log(BMIMark);
// const BMIJohn = massJohn / heightJohn ** 2;
// console.log(BMIJohn)
// const markHigherBMI = BMIMark > BMIJohn;
// if(BMIMark > BMIJohn) {
//     console.log(`Mark's BMI ${(BMIMark)} is higher than john's ${(BMIJohn)}`);
// } else {
//     console.log(`John's BMI ${(BMIJohn)} is higher than Mark's ${(BMIMark)}`)
// }

/////////////////////////////////////////////////////////////////////////////////
//// Type Conversion and Coercion

// type conversion
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas'));
// console.log(typeof Nan);

// console.log(String(23), 23);

//// type coercion
// console.log('I am '+ 23 + 'years old');
// console.log('23' + '10' - 3);
// console.log('23' - '10' + 3);

// console.log('23' / '2');

// let n = '1' + 1;
// console.log(n);
// n = n - 1;
// console.log(n);

// var x = 15 / (true + 2);
// console.log(x);
// var y = false + 2;
// console.log(y);

///////////////////////////////////////////////////////////////////////////
// Truthy and Falsy Values

// 5 falsy values: 0, '', undefined, null, NaN
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean({}));
// console.log(Boolean(""));

// const money = 100;
// if (money) {
//   console.log("Don't spend it all");
// } else {
//   console.log("You should get a job!");
// }

// const height = 0;
// if (height) {
//   console.log("YAY! Height is defined");
// } else {
//   console.log("Height is UNDEFINED");
// }

/////////////////////////////////////////////////////////////////////
// Equality Operators: == vs. ===
// const age = '18';
// if(age === 18) console.log('you just became an adult :D (strict)');
// if(age == 18) console.log('you just became an adult :D (loose)');

// const favourite = Number(prompt("what's your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//   console.log("Cool! 23 is an amzing number!");
// } else if (favourite === 7) {
//   console.log("7 is also a cool number");
// } else if (favourite === 9) {
//   console.log("9 is also a cool number");
// } else {
//   console.log("Number is not 23 or 7 or 9");
// }

// if(favourite !== 23) console.log('Why not 23?');
//////////////////////////////////////////////////////////////////////////////////
///////////Logical Operators
// const hasDriversLicense = true;
// const hasGoodVision = true;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// // if(hasDriversLicense && hasGoodVision) {
// //   console.log('Sarah is able to drive!');
// // } else {
// //   console.log('Someone else should drive...');
// // }

// const isTired = false ;
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if(hasDriversLicense && hasGoodVision && isTired) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

// const scoreDolphins = (96 + 108 + 89)/3;
// const scoreKoals = (88 + 91 + 110)/3;
// console.log(scoreDolphins, scoreKoals);

// if(scoreDolphins > scoreKoals) {
//   console.log('Dolphins win the trophy 🏆');
// } else if(scoreKoals > scoreDolphins) {
//   console.log('Koalas win the trophy 🏆');
// } else if(scoreDolphins === scoreKoals) {
//   console.log('Both win the trophy');
// }

// BONUS 1:
// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoals = (109 + 95 + 50) / 3;
// console.log(scoreDolphins, scoreKoals);

// if(scoreDolphins > scoreKoals && scoreDolphins >= 100) {
//   console.log('Dolphins win the trophy 🏆');
// } else if(scoreKoals > scoreDolphins && scoreKoals >= 100) {
//   console.log('Koalas win the trophy 🏆');
// } else if(scoreDolphins === scoreKoals && scoreDolphins >= 100 && scoreKoals >= 100) {
//   console.log('Both win the trophy');
// } else {
//   console.log('No one wins the trophy');
// }

//////////////////////////////////////////////////////////////////
// The switch statement
// const day = "friday";

// switch (day) {
//   case "monday":
//     console.log("plan new task");
//     console.log("start coding")
//     break;
//   case "tuesday":
//     console.log("continue to code");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("learn dsa");
//     break;
//   case "friday":
//     console.log("continue work on the task");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Enjoy the weekend :D");
//     break;
//   default:
//     console.log("Not a valid day!");
// }

/////////////////////////////////////////////////////
// Statements and Expressions

// if(23 > 10) {
//   console.log('23 is bigger');
// }

// const me = 'Jonas';
// console.log(`I'm ${2037 - 1991} years old ${me}`);

///////////////////////////////////////////////////
// The Conditional (Ternary) Operator
// const age = 23;
// age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

// let  drink;
// if (age >= 18) {
//   drink = 'wine 🍷';
// } else {
//   drink = 'water 💧';
// }
// console.log(drink);

// console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);


////////////////////////////////////
// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/

const bill = 430;
const tip = bill <=300 && bill >=50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

