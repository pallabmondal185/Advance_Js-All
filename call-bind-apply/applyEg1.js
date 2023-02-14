let person={
    fullName:function(city,country){
        console.log(this.fname + ' ' + this.lname+ ' '+ ' '+city+ ' '+ country)
    }
}

let person1={
    fname:'pallab',
    lname: 'mondal'
}

//With the apply() method, you can write a method that can be used on different objects.

//Difference apply() vs call()
//The call() method takes arguments separately.
//The apply() method takes arguments as an array.

person.fullName.apply(person1,['kolkata','India']);
// person.fullName.apply(person1,'kolkata','India');