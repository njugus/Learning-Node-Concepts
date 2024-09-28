//http module
//creating a server

//http.createServer(): This function creates an HTTP server that listens 
//for incoming requests. It takes a callback function with two parameters, req (request) and res (response), 
//which are used to handle the incoming request and outgoing response.
const http = require('http')

//create a server
const serverOne = http.createServer((req, res) => {
    //ok
    res.statusCode = 200
    res.setHeader("content-type", "text/plain")

    //end the response and send the response body
    res.end("Hello world\n")
})

//listen to port 3000
serverOne.listen(3000, () => {
    console.log("Server running on port 3000");

})



//example 2 
//handle incoming requsts and responses
const server = http.createServer((req, res) => {
    if(req.url == "/" && req.method == "GET"){
        res.statusCode = 200
        res.setHeader("content-type", "text/plain")
        res.end("Welcome to our home page")
    }else if(req.url == "/about" && req.method == "GET"){
        res.statusCode = 200
        res.setHeader("content-type", "text/plain")
        res.end("Welcome to our about page")
    }else{
        res.statusCode = 404
        res.setHeader("content-type", "text/plain")
        res.end("Not Found")
    }
})

server.listen(3000, () =>{
    console.log("Server running on port 3000....");
})



//example 3
//handling POST request
//hanling streaming responses
const serverThree = http.createServer((req, res) => {
    if(req.url == "/"  && req.method == "GET"){
        res.statusCode = 200
        res.setHeader("content-type", "text/plain")
        res.end("Welcome to our home page")
    }else if(req.url == "/data" && req.method == "POST"){
        //store this chunks in a variable 
        let body = " "

       //collect data chunks
       req.on("data", chunk => {
        body += chunk.toString()//convert binary(stream) to string and append it to the body
       }) 

       //after the chunk collection is complete raise an end event
       req.on("end", () => {
        ///log the data 
        console.log(body);
        
        //create a response
        res.statusCode = 200
        res.setHeader("content-type", "application/json")
        res.end(JSON.stringify({  success : true, data : body}))
       })
    }else{
        res.statusCode = 404
        res.end("Not Found")
    }
})
serverThree.listen(3000, () =>{
    console.log("Server running on port 3000....");
})



//example 4
//sending JSON responses
const serverFour = http.createServer((req, res) => {
    if(req.url == "/json"){
        res.statusCode = 200
        res.setHeader("content-type", "application/json")

        //send the response
        const details = { username : "Kelvin", residence : "ohio"}
        res.end(JSON.stringify({ success : true,  data : details}))
    }
})

serverFour.listen(3000, () =>{
    console.log("Server running at port 3000.....")
}
)


//example 5
//making a request to an external server
const http = require('http')

http.get('http://jsonplaceholder.typicode.com/posts/1', (res) => {
    let details = " "
    //collect tge chunks
    res.on('data',  chunk => {
        details += chunk
    })

    //once the entire response has been received
    res.on("end", () => {
        console.log(JSON.parse(details));
    }).on("error", (err) => {
        console.error(err);    
    })
})







