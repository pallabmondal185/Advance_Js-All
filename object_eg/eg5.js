const student=[
    {fname:"pritam",lname:"saha",roll:14},
    {fname:"rabin",lname:"das",roll:15},
    {fname:"samal",lname:"roy",roll:9},
    {fname:"kabir",lname:"kundu",roll:5},
];

//find the name of student whose roll is 9
var r=9;
let flag=0;
for(let x in student){
    if(student[x].roll==r){
        console.log(text=student[x].fname+" "+student[x].lname);
        flag=1;
        break;
    }
}

if(flag==0){
    console.log("enter a valid roll no.");
}

