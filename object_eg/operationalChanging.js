//Optional chaining (?.)
//The optional chaining (?.) operator accesses an object's property or calls a function.
//If the object is undefined or null, it returns undefined instead of throwing an error.

const student={
    name:'pallab',
    age:26,
    address:{
        city:'kolkata',
        state:'west bengal'
    }
}

console.log(student.roll);
console.log(student.roll?.name);
// console.log(student.roll.name);

console.log(student?.name);