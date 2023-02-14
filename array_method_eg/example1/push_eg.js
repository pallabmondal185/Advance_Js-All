//push() methot adds value at the end.
let names=["pritam","malay","rahul"];
console.log(names);
console.log(names.push()); //push() method returns the length of array.
console.log(names.push("neel"));
console.log(names);

document.getElementById("demo").innerHTML = names+"<br>"+names.push()+"<br>"+names.push("neel")+"<br>"+names;