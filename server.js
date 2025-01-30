const http = require("http");

const PORT = 8000;

const server = http.createServer((req,res) => {
     const {method , url} = req;
    if(url==='/' && method === "GET"){
        res.end("hello from server");
    }
    if(url==='/about' && method === "GET"){
        res.end("hello from about");
    }
    if(url==='/data' && method === "POST"){
        let body ='';
        req.on('data', chunk =>{
            body += chunk.toString();
        });

        req.on('end',()=>{
            res.end(JSON.stringify({message : "data recieved " , data: body}));
        })
    }
});


server.listen(PORT , () => {
    console.log("Listening on port http://localhost:8000");
})

