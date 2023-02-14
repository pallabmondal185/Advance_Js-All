class student{
    constructor(){
        console.log("this is constructor of student");
    }
    st1(){
        console.log("this is student class");
    }
}

class teacher extends student{
    constructor(){
        console.log("this is constructor of teacher");
        super();  //super function must be called
        //The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.
        //The super() function is used to give access to methods and properties of a parent or sibling class.
    }  
    

    tr1(){
        console.log("this is teacher class");
    }
}

let a1=new teacher("math");
a1.st1();
a1.tr1(); 

a2=new student();
a2.st1();
// a2.tr1();  //error