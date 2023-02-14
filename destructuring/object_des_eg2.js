const student=[
    {fname:"pritam",lname:"saha",roll:14},
    {fname:"rabin",lname:"das",roll:15},
    {fname:"samal",lname:"roy",roll:9},
    {fname:"kabir",lname:"kundu",roll:5},
]
// console.log(student[2]);
// console.log(student[2].lname);

const [st1,st2,st3,st4]=student;
const {fname,lname,roll}=st3

p=`first name of student is: ${fname}
last name of student is: ${lname}
roll of student is: ${roll}`;

console.log(p);