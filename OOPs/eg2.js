class student{
    constructor(){
        console.log(`student details:-`);
    }
    st1(fname,lname,roll){
        console.log(`the name of student is: ${fname} ${lname} \nthe roll of student is: ${roll}`);
    }
}

let a=new student();
a.st1("pallab","mondal",15);