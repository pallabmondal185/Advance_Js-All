function roll(a,...arg){
    console.log(arg);
    console.log(typeof(arg));

    console.log(...arg);
    // console.log(typeof(...arg));  //error

    let arr=[100,200];
    console.log([...arr])

    console.log(a);
    
}
roll(10,11,12,13,14,15,16,17);