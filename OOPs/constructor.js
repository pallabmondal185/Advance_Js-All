class student{

    constructor(){ 
        let names;
        console.log("call constructor function");
    }
hello(){
    console.log("hello "+this.names);
}
}

let a=new student();
a.names="pritam";
a.hello();