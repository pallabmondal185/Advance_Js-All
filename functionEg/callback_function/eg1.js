function display(sum){
    console.log(`the sum is: ${sum}`);
}

//A callback is a function which is passed as an argument to another function.

function myFunc(n1,n2,sum){
    sum(n1+n2);
    //display(n1+n2);
}

myFunc(5,7,display);