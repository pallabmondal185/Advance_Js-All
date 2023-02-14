setInterval(myfunc,2000);

function myfunc(){
    // console.log("hello...");
    let d=new Date();
    console.log(d.getHours()+":"+d.getMinutes()+":"+d.getSeconds());
}
