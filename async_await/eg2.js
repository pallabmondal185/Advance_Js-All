const student=[
    {name:"pradip",subject:"java"},
    {name:"tapan",subject:"python"}
];

function setStudent(newStudent){
    return new Promise((resolve)=>{
        setTimeout(() => {
            student.push(newStudent);
            resolve();
        }, 2000);
    });
}

function getStudent(){
    setTimeout(() => {
        student.forEach((names)=>{
            console.log(names);
        });
    },1000);
}

async function asyncCall(){
    let newStudent={name:'ramesh',subject:'node js'};
    let result=await setStudent(newStudent);
    // console.log(result);
    getStudent();
}
asyncCall();
