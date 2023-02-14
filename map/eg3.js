// Create a Map using array

// const students = [
//     ['1', 'Harry'],
//     ['2', 'Joe'],
//     ['3', 'Peter'],
//   ];
//   let myMap = new Map(students);
//   myMap.get(2); //Output: "Joe"

const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  
  let text = "";
  fruits.forEach (function(value, key) {
    text += key + ' = ' + value + ' ' //+ "<br>"
  })
  
//   document.getElementById("demo").innerHTML = text;
console.log(text);
  