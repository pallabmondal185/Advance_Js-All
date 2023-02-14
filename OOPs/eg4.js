class student{
    // constructor(){
    // }
    st1(){
        let fn,ln,r;
    }
    st2(){
        console.log(`${this.fn} ${this.ln} ${this.r}`);
    }
}

let a=new student();
// a.st1();
a.fn="rajib";
a.ln="roy";
a.r=17;
a.st2();