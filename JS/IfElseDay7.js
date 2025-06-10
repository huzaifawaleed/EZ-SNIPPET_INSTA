console.log(!true);  /*! Operator use to false the given condition it works opposite to the given condition*/
console.log(!5);


console.log(3 > 5 || 5 > 3); /* || OR is use to check multiple values it is used to check for TRUE value if one of the value is true then it runs*/


console.log(3 < 5 && 5 > 3); /* && AND is use to check multiple values if both values are true then it runs otherwise the value is false*/



// Age Calculator


let age = 2025 - 2010;
console.log(`Age is: ${age}`); /*When we use backticks in this scenario it is TEMPLATING.*/
if(age < 19){
    console.log("Teenage");
}
else if (age > 19 && age < 50) {
    console.log("Young");
}
else{
    console.log("Old");
}


let a = 10;
let b = 15;
console.log(`Number is: ${a,b} `);
if (a < b) {
    console.log("10 is less than 15");
}
else{
    console.log("10 is greater than 15")
}

// Practice Questions
// Check if number is even or odd

let num = 3;
console.log(`Number is: ${num}`);

if(num % 2 == 0){
    console.log("Number is EVEN");
}
else{
    console.log("Number is ODD");
}


