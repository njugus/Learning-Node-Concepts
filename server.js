//created a basic server in express
const express = require('express')
const app = express()
const path = require('path')

//use express.urlencoded() to parse form data to a javascript object
app.use(express.urlencoded({ extended : true }))
app.use(express.static('public'))

//send the form to the user
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "form.html"))
})

//create a route
app.post("/submit", (req, res) => {
    const { name,  email } = req.body

    //error handling 
    if(!name || !email){
        return res.status(400).send("Name or Email not inputed")
    }
    res.status(200).send(`Received form data: <br/> Name : ${name} <br/> Email : ${email}`)
})
//the server is listening to port 3000 for incoming results
app.listen(3000, () => {
    console.log("Listening to port 3000");
})
