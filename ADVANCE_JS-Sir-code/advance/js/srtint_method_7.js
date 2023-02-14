let text = "ABCDEF";
document.getElementById("demo").innerHTML = text.length;

//*****string slice*****
//Slice out a portion of a string from position 7 to position 13
// let str = "Apple, Banana, orange";
// document.getElementById("demo").innerHTML = str.slice(7,13);

//****replace***

function myFunction() {
    let text = document.getElementById("demo1").innerHTML;
    document.getElementById("demo1").innerHTML =
    text.replace("Microsoft","W3Schools");
  }