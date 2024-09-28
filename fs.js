//fs module to interact with your file system

//export the module
const fs = require('fs')

//read the file using the readFile asynchronous method which doesnt block the event loop
fs.readFile("./public/songs.txt", "utf-8", (err, data) => {
    if(err){
        console.log(`Err reading the file: ${err}`); 
        return;   
    }
    console.log(`Content :\n${data}`);
})

//writing to files
//Asynchronous Method (fs.writeFile)
//UTF-8 ensures that any string, including special characters and non-ASCII text, 
// is correctly encoded and saved in a human-readable format.
//if you write any content to the file, the previous content that was in the file gets deleted
//and the new content is added

fs.writeFile("./public/songs.txt", content, "utf-8", (err) => {
    if(err){
        console.error("Error : ", err);
    }
    console.log("File written successfully");
    
})

fs.appendFile("./public/songs.txt", content + "\n", "utf-8", (err) => {
    if(err){
        console.error(`Error : ${err}`);  
    }
    console.log("Content added successfully");
    
})


//5. Renaming Files
//You can rename or move files using fs.rename 
fs.rename("./public/songs.txt", "./public/popsongs.txt", (err) => {
    if(err){
        console.error(`Error : ${err}`); 
    }
    console.log("File renamed successfully");
})

//deleting files
fs.unlink("./public/popsongs.txt", (err) => {
    if(err){
        console.error(`Error : ${err}`); 
        return
    }
    console.log("File deleted successfully");
})


//working with directories
//we can also create, read and delete directories

//creating a directory
fs.mkdir("private", (err) => {
    if(err){
        console.error(`Error : ${err}`);
        return;   
    }
    console.log("Directory created successfully");
})


//reading from a directory
fs.readdir("./public", (err, files) => {
    if(err) {
        console.error(`Error : ${err}`);  
    }
    console.log("Files in the directory: ", files);
    
})

// deleting a directory/ removing a directory
//rmdir()
fs.rmdir("./private", (err) => {
    if(err){
        console.error(`Error : ${err}`);
    }
    console.log("Directory deleted successfully");
})







