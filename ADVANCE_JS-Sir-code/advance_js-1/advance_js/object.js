 //es5
 function student1(name,email,phone){
   return{
     name,
     email,
     phone
   }
 }
 let student=student1("sourav","sourav@gmail.com","9933935760")
 console.log(student);



 function laptop(make,model,year){
     return{
         make : make,
         model : model,
         year : year

     }
 }

  let result=laptop("Apple","makeBook","2015")
  console.log(result)

// function getlaptop(make,model,year){
//     return {
//         make,
//         model,
//         year
//     }
// }
//  let result=getlaptop("Apple","makeBook","2015")
//  console.log(result)

// let prefix="machine";
// let machine={
//     [prefix+ 'name'] : "computer",
//     [prefix+ 'work'] : "IT sector"

// }
// console.log(machine['machine name'])


