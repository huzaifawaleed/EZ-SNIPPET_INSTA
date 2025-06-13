// Practice Questions
// 1: Check if number is even or odd

let num = 3;
console.log(`Number is: ${num}`);

if(num % 2 == 0){
    console.log("Number is EVEN");
}
else{
    console.log("Number is ODD");
}


// 2: Check if user is eligible to vote

let voter = 18;
console.log(`Voter is ${voter} years old. `);
if (voter >=18) {
    console.log("You are eligible to Vote");
}
else{
    console.log("You are not eligible to vote");
}

// This is using TERNARY operator this is only possible when there are two conditions
let voterr = 18;
 let ans = (voterr >=18) ? "eligible" : "not eligible"
 console.log(ans);


// 3: Comparing Two numbers greater than or equals 

let a = 10;
let b = 6;

if (a < b) {
    console.log("A is Less than B");
}
else if(a > b){
    console.log("A is Greater than B");
}
else{
    console.log("Equal");
}

// 4: Check if character is vowel

let letter = "a";

if (letter === 'a') {
    console.log("Letter is Vowel");
}
else if (letter === 'e') {
    console.log("Letter is Vowel");
}
else if (letter === 'i') {
    console.log("Letter is Vowel");
}
else if (letter === 'o') {
    console.log("Letter is Vowel");
}
else if (letter === 'u') {
    console.log("Letter is Vowel");
}
else {
    console.log("Letter is not a vowel");
}

// 4: Other way using || operator

let char = "e";

if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    console.log("Char is vowel");
}
else{
    console.log("Char is not vowel");
}


// 5: Simple login check

let username = "Waleed";
let pass = "12349"

if (username === "Waleed" && pass === "1234") {
    console.log("User can login");
}
else{
    console.log("User cannot login");
}