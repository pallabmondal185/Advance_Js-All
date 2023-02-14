const person={
    fullName:function(city,country){
        console.log(this.fname + ' ' + this.lname+ ' '+ ' '+city+ ' '+ country);
    }
}

let person1={
    fname:'pallab',
    lname: 'mondal'
}

person.fullName.call(person1,'kolkata','India');