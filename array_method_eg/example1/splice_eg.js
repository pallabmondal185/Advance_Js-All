var names=["pritam","malay","rahul","ganesh","ram"];
console.log(names);
names.splice(2,1,"neel","bimal","kamal"); //the first parameter 2 defines the position where the new element should be added (spliced in).
console.log(names);             //  the second parameter  defines how many element should be removed from that positionz.

var fruits=["apple","mango","graves"];
console.log(fruits);
fruits.splice(0,1);
console.log(fruits);

var animals=["lion","tiger","bear","horse"];
console.log(animals);
console.log(animals.splice(2)); //it removes element from original array.
console.log(animals);

