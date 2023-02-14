// var promise = new Promise(function(resolve, reject) {
//     const x = "Raju";
//     const y = "Raju"
//     if(x === y) {
//       resolve();
//     } else {
//       reject();
//     }
//   });
    
//   promise.
//       then(function () {
//           console.log('Success, You are a GEEK');
//       }).
//       catch(function () {
//           console.log('Some error has occured');
//       });

var promise= new Promise(function(resolve, reject){
   const a= "webskitters"
   const b= "raju"

   if(a===b){
     resolve()
   }else{
     reject()
   }
})
promise.then(function(){
  console.log("success you are in webskitters")
}).catch(function(){
  console.log(" error")
})