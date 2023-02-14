const student=[
    {fname:"pritam",lname:"saha",roll:14},
    {fname:"rabin",lname:"das",roll:15},
    {fname:"samal",lname:"roy",roll:9},
    {fname:"kabir",lname:"kundu",roll:5},
];

for (let x in student){
    var {fname,lname,roll}=student[x];
    console.log(`${fname} ${lname} ${roll}`);
}