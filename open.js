
const fs = require('fs')

//deleting files
fs.unlink("./public/popsongs.txt", (err) => {
    if(err){
        console.error(`Error : ${err}`); 
        return
    }
    console.log("File deleted successfully");
})