"use strict"

let http = require("http");
let url = require("url");
let fs = require("fs");
const path = "./../Pages";

//Process request and return a response.
const requireProcess = (request, response) => {
    fs.readFile(`${path} /index.html`, (error, html) => {

        response.writeHead(200, { "Content-Type": "text/html" });
        if(error.code == 200)
        {
            let urlResult = url.parse(request.url, true);
            response.write(html);
        }
        else
            response.write("Error 404: PageNotFound");

        response.end();
    });
}

//Create a server.
const server = http.createServer(requireProcess);

server.listen(8080, ()=>
{
    console.log("Server On!");
});