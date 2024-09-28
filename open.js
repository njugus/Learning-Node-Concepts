
const fs = require('fs')

//task 1
//create a directory
//create a file inside the directory
//add contents to the file
songs = [
    "alone - alan walker",
    "hello - adele",
    "no bounds - toronto",
    "we good - dua lipa"
]

const content = songs.join("\n")

fs.mkdir("private", (err) => {
    if(err){
        console.error(`Error : ${err}`);
        return
    }
    console.log("Directory created successfully");
})

fs.appendFile("./private/songs.txt", content + "\n", "utf-8", (err) => {
    if(err){
        console.error(`Error : ${err}`); 
        return;
    }
    console.log("file created successfully")
    console.log("Contents appended successfully");
})

fs.readFile("./private/songs.txt", "utf-8", (err, data) => {
    if(err){
        console.error(`Error : ${err}`);
        return;
    }
    console.log(`Data :\n${data}`);
})
