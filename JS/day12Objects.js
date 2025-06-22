let me = {
    name: "Huzaifa",
    age: 20,
    profession: "Student/Developer",
    gender: "Male",
    'last-name': "Waleed"  // we can acess - in our object using['last-name'] with we cannot use dot .
}
console.log(me['last-name']) 


// now here is a one more method to access keys using variable outside the object

let key = 'age'   // this is the variable
let mee = {
    name: "Huzaifa",
    age: 20,
    profession: "Student/Developer",
    gender: "Male",
    'last-name': "Waleed"
}

console.log(mee[key])  // and here i am calling