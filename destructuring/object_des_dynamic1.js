const student=[
    {fname:"pritam",lname:"saha",roll:14},
    {fname:"rabin",lname:"das",roll:15},
    {fname:"samal",lname:"roy",roll:9},
    {fname:"kabir",lname:"kundu",roll:5},
];

//printing all elements of student
console.log(`all elements of student are:`)
const st1=[];
for(let x in student){
    for(let y in student[x]){
        st1.push(student[x][y]);
    }
}
console.log(st1);

//printing only first names
console.log(`first names of student are:`)
const st2=[];
for(let x in student){
    st2.push(student[x].fname);
}
console.log(st2);

//printing only last names
console.log(`last names of student are:`)
const st3=[];
for(let x in student){
    st3.push(student[x].lname);
}
console.log(st3);

//printing only roll no.
console.log(`roll no of student are:`)
const st4=[];
for(let x in student){
    st4.push(student[x].roll);
}
console.log(st4);