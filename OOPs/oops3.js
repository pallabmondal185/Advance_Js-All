console.clear();

class student{
    constructor(fname,lname,roll){
        this.fname=fname;
        this.lname=lname;
        this.roll=roll;
    }
    
    getFname(){
        return this.fname;
    }
    getLname(){
        return this.lname;
    }
    getRoll(){
        return this.roll;
    }
}

class subject extends student{
    constructor(fname,lname,roll,subject){
        super(fname,lname,roll);
        this.subject=subject;
    }
    getSubject(){
        return this.subject;
    }
}

// let a=new student('pallab','mondal',23);
// a.getData();

let sub=new subject('pallab','mondal',23,'javascript');
console.log(sub.getFname(),sub.getLname(),sub.getRoll(),sub.getSubject())
