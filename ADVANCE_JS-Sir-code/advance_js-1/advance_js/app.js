let http=require('http')

http.createServer(function(req,res){

    res.write("<input type='text'/>")
    res.end()

}).listen(2000)