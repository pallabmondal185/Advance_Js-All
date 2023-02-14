const student={
    name:"ram",
    roll: 23,
    address:{
        vill:"neogirat",
        post:"chaluary",
        ps:"falta",
        pin:743513
    },
    add: (n1,n2) => {return n1+n2},
    sub: function(n1,n2){return n1-n2}
};

console.log(student.address);
console.log(student.address.post);
console.log(student);

console.log(student.add(7,6));
console.log(student.sub(7,6));
