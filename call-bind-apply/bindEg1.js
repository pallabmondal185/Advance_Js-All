const student1 = {
    fname: 'pallab',
    lname: 'mondal',
    FullName: function () {
        return this.fname + " " + this.lname;
    }
}

const student2={
    fname: 'Niladri',
    lname: 'Kayal'
}

console.log(student1.FullName.call(student2));
console.log(student1.FullName.apply(student2));
console.log(student1.FullName.bind(student2));

//With the bind() method, an object can borrow a method from another object.
//Bind is a function that helps you create another function
console.log(student1.FullName.bind(student2));
let fullName=student1.FullName.bind(student2);
console.log(fullName());

