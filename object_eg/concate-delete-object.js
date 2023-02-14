let a={
    name:'pallab',
    roll:24,
    subject:'javascript'
}
console.log(a);

let b={
    age:12,
    city:'kolkata'
}
console.log(b);

//concadination of two object
let c={
    ...a,
    ...b
}
console.log(c);

//delete one element of object
delete(a.roll);
console.log(a);