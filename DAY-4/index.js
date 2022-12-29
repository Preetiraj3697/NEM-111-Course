const http =require("http");
const fs = require('fs');
const server = http.createServer((request, response)=>{
    if(request.url==="/"){
        response.setHeader("Content-type","text/html")
        response.end("<h1>This is home page</h1>");
    }else if(request.url==='/data'){
        fs.readFile("./data.json",(err,data)=>{
              if(err){
                response.write(err);
                response.end();
              }else{
                response.end(data);
              }
        })
    }else if(request.url === "/reports" && request.method ==="POST"){
        //Post request
        let str = "";
        request.on("data",(packet)=>{
           str+=packet; 
        })
        request.on("end",()=>{
            console.log(str);
        })
        console.log(str);
        response.end("DATA has been entered");
    }else if(request.url==='/movie'){
       //without stream
    //    const movie = fs.readFileSync("./lecture.txt", "utf-8")
    //    response.end(movie);
          const movieStream = fs.createReadStream("./lecture.txt", "utf-8")
          movieStream.pipe(response);
        //without stream
    }else{
        response.end("Invalid End Point");
    }
})
const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
    console.log(`This server is running at Port ${PORT}`)
});