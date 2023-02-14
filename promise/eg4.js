const student=[
    {name:"pradip",subject:"java"},
    {name:"tapan",subject:"python"}
];

function setStudent(newStudent){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            student.push(newStudent);
            error=false;
            if(!error){
                resolve(()=>{
                });
            }
            else{
                reject("some error occured:-");
            }
        },2000);
    });
}

function getStudent(){
    setTimeout(() => {
        student.forEach((names)=>{
            console.log(names);
        });
    },1000);
}
let newStudent={name:"ajay",subject:"node js"};
setStudent(newStudent).then(getStudent).catch((values)=>{
    console.log(values);
});