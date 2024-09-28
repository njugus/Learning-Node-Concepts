const express = require('express')
const app = express()
const users = [
    { userId : 1, username : "Kelvin" },
    { userId : 2, username : "Ruth"},
    { userId : 3, username : "Agnes"}
]

app.use(express.json())

app.use((req, res, next) => {
    console.log(`${req.method} : ${req.url}`);
    next()
})


//route 1 
app.get("/users", (req, res) => {
    res.status(200).json(users)
})


//route 2
app.get("/users/:id", (req, res) => {
    const userId  = req.params.id
    const user = users.find(u => u.userId === parseInt(userId));
    if(!user){
        return res.status(404).json({ success : false, message : "user not found"})
    }
    return res.json(user)
})


//route 3
app.post("/users/post", (req, res) => {
    const userDetails = { userId : 6, username : "John"}
    const newUsers = users.push(userDetails)
    res.status(200).json(newUsers)
})



app.listen(3000, () => {
    console.log("Listening to port 3000...");
})