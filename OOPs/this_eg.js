class students{
    constructor(){
        let fname,lname,roll;
    }
    st1(){
        console.log("the name of student is: "+this.fname+" "+this.lname);
        console.log("the roll of student is: "+this.roll);
    }
}
let a=new students();
a.fname="pritam";
a.lname="das";
a.roll=15;

a.st1();