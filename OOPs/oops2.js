class vehical{
    constructor(name,type){
        this.name=name;
        this.type=type;
    }
    getName1(){
        return(this.name);
    }
    getType(){
        return(this.type+'  '+this.getName1()+'  '+super.type);
    }
} 
class car extends vehical{
    constructor(name){
        super(name,'bus');
    }
    getName2(){
        return super.getName1()+', '+this.getName1()+', '+this.name+'  '+super.name;
    }
    // getType(){
    //     return 'this is a car:'+super.getType();
    // }
}

let a=new car('volvo');

console.log('1. '+a.getName2());
console.log('2. '+a.getType());
console.log('3. '+a.getName1());