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

//The call() method is a predefined JavaScript method.
//With call(), an object can use a method belonging to another object.
console.log(student1.FullName.call(student2));





