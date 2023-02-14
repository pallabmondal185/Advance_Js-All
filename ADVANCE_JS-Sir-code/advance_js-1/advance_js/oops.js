// class hello{
//     Message(){
//         console.log("hello world")

//     }
//     sorry(){
//         console.log(" hello every one ")
//     }
// }
// let a= new hello()
// a.Message()
//a.sorry()

// class student {
//     constructor(){
//         let name
//         console.log("call constrictor function")
//     }
//     hello(){
        
//         console.log("hello " + this.name)
//     }
// }
// let a= new student()
// a.name="raju kayal"
// a.hello()

class student {
    constructor(name,age){
        this.sname=name
        this.sage=age
        console.log("call constrictor function")
    }
    hello(){
        console.log("hello " + this.sname+ " your age is "+ this.sage)
    }
}
let a= new student("raju kayal", 27)
//a.name="raju kayal"
a.hello()



// class hello{
//     message(){
//         console.log("hello student")
//     }

//     sorry(){
//         console.log("i am sorry")
//     }
// }


// let a= new hello()
// a.message()
// a.sorry()

// class student{
//     constructor(){
//         console.log("hello student")
//     }
// }

// let a= new student()



