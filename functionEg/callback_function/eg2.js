const student=[
    {name:"rohan",subject:"python"},
    {name:"nilesh",subject:"javascript"}
]

function setStudent(newStudent,callback){
    setTimeout(() => {
        student.push(newStudent);
        callback();
    }, 2000);
}

function getStudent(){
    let std="";
    setTimeout(() => {
        student.forEach((student)=>{
            std+=student.name+", ";
            document.getElementById("demo").innerHTML=std;
            console.log(student.name);
        });
    }, 1000);
}

let newStudent={name:"kamal",subject:"php"};
setStudent(newStudent,getStudent);