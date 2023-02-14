function names(a,b,...c){
    console.log(`${a} ${b} ${c}`);
    console.log(`${c}`);
    console.log(...c);
    console.log(...c[1]);
    console.log(c);
    console.log(c.indexOf("ritam"));
}
names("pritm","subir","ritam","sudipta","tapan");