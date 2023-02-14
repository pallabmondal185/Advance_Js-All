function myfunc(){
    const student={
        names: "rahul",
        roll: 14,
        marks: 70.36
    };
    return student;
}
const st1=myfunc();
console.log(`name is: ${st1.names}, roll is: ${st1.roll}, marks is: ${st1.marks}`);