let me1 = {
    name: "Huzaifa",   // name is a key and it is inside the "" quotes
    age: 20,
    profession: "Student/Developer",
    gender: "Male"
}
console.log(me1)     // calling Whole object
// console.log(me.name)  // By keys
// console.log(me.age)
// console.log(me.profession)


me.name = "Huziafa Waleed"   // updating object
console.log(me)
delete me.gender            // for deleting any key
console.log(typeof me.age)  // checking type


               //DAY 12

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



let myobj = {
    name: "Huzaifa",
    age: 20,
    profession: "Student/Developer",
    gender: "Male",
    address:{
      house: 'D-115',  // In this I have used NESTED object like object in the object 
      road: 'abc'
    }
}
console.log(myobj.address.road)  // And I can Access Keys like this





