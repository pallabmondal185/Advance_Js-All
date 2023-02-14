
// function roll(a,...arg){
//     console.log(arg);
// }
// console.log(roll(10,12,13,14,15,16,17,18,19,20));

function sum(...arg){
    //console.log(arg);
    let total=0;
    for(let i of arg){
        total +=i;
    }
    console.log(total);
}
sum(20,30,40)


// function sum(...input){
//     console.log(...input)
// }
// console.log(sum(1,2,3,4,5,6,7,8,9,10));


// function myfunction(a,b, ...c){
//     //console.log(`${a} ${b}`);
//     //console.log(c);
//     //console.log(c[2]);
//     //console.log(c.length);
//     //console.log(c.indexOf('messi'));

// }
// myfunction("ronaldo","neymar","pele","messi","sunil")




// function sum(...input){
    
//     let total=0;
//     for(let i of input){
//         total += i;
//     }
//     console.log(total)
// }
// sum(1,2,3,4,5,6,7)

// const odd=[1,2,3]
// const combind=[...odd,4,5,6];

// console.log(combind)


// function sum(...input)

// {
//     console.log(input)
// }

// sum(1,2,3,4,5,6,7,8,77,88,88,88,88,)

// function sum(...input){
//     let total=0
//     for( let i of input){
//         total +=i;
//     }
//     console.log(total)
// }

//  sum(20,30,40,50,60,70,80,90,2)

// const add=[20,25,30]

// const combind=[...add,35,40,50,55,60]

// console.log(combind)

// function fun(a,b,...c){
//     //console.log(`${a} ${b} ${c}`)// Ronaldo Neymar
//     //console.log(...c)//Pele Messi Sunil
//     //console.log(c[0])//pele
//     //console.log(c.length)//3
//     //console.log(c.indexOf('Sunil'))//2
// }

// fun('Ronaldo','Neymar','Pele','Messi','Sunil')