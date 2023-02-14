class cars{
    constructor(name,color){
        let n,c;

        //This keyword is used inside of a class and refers to the current instance.
        //In JavaScript, the this keyword refers to an object. Which object depends on how this is being invoked (used or called). 
        this.name=name; 
        this.color=color;
        //name=name;
        //color=color; //output will be undefine
        n=name;
        c=color;
        console.log(`1. name of car is: ${name}\ncolor of car is: ${color}`);
    }
    car1(){
        console.log(`2. this is ${this.c} ${this.n} car`);
        console.log(`3. this is ${this.name} ${this.color} car`)
        console.log(`4. this is ${this.n} ${this.c} car`)
    }
}

a=new cars("maruti","red");
a.c="blue";
a.n="honda";
a.car1();
