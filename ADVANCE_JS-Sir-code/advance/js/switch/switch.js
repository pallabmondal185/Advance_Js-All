console.log('hello');


// var grade='B';  
// var result;  
// switch(grade){  
// case 'A':  
// result="A Grade";  
// break;  
// case 'B':  
// result="B Grade";  
// break;  
// case 'C':  
// result="C Grade";  
// break;  
// default:  
// result="No Grade";  
// }  
// document.write(result); 



//***second example */


switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }
  document.getElementById("demo").innerHTML = "Today is " + day;