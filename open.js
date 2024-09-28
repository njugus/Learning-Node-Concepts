const fs = require('fs')

fs.mkdir("private", (err) => {
    if(err){
        console.error(`Error : ${err}`);
        return;   
    }
    console.log("Directory created successfully");
})


