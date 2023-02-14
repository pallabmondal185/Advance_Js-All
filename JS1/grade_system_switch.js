//Grade system using switch case.

var n=75;
switch(true){
    case n<100 && n>=80 : console.log(`grade A`);
        break;
    case n<80 && n>=60 : console.log(`grade B`);
        break;
    case n<60 && n>=45 : console.log(`grade C`);
        break;
    case n<45 && n>=30 : console.log(`grade D`);
        break;
    case n<30 : console.log(`FAIL`);
        break;
    default: console.log(`Enter the marks within 0 to 100`);
}
