let me = {
    name: "Huzaifa",
    age: 20,
    profession: "Student/Developer",
    gender: "Male"
}
console.log(me)     // calling Whole object
// console.log(me.name)  // By keys
// console.log(me.age)
// console.log(me.profession)


me.name = "Huziafa Waleed"   // updating object
console.log(me)
delete me.gender            // for deleting any key
console.log(typeof me.age)  // checking type