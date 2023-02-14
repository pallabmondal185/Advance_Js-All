function add(...num){
    let sum=0;
    // for(let x in num){
    //     sum=sum+num[x];
    // }

    num.forEach(x => console.log(x));

    return sum;
}
console.log("addition is: "+add(1,2,3,4,5,6,7,8,9));

