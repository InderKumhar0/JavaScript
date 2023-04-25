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
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a job!");
}

const height = 0;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}
