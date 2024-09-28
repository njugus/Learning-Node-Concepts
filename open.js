//To add new content to an existing file, use fs.appendFile or fs.appendFileSync.

const fs = require('fs')
const songs = [
    "Only Human - Jonas Brothers",
    "Freak The Freak Out - victorious",
    "fire - Alan Walker",
    "Hello - Adele"
]

const content = songs.join("\n")

fs.appendFile("./public/songs.txt", content + "\n", "utf-8", (err) => {
    if(err){
        console.error(`Error : ${err}`);  
    }
    console.log("Content added successfully");
    
})

fs.readFile("./public/songs.txt", "utf-8", (err, data) => {
    if(err){
        console.error(`Error : ${err}`); 
    }
    console.log(`Data : ${data}`);
    
})