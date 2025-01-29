// Reads the content of a file and prints it on the console

const fs = require("fs");
const path = require("path");

function readFile(directory,fileName) {

    const filePath = path.join(directory,fileName);

    fs.readFile(filePath,(err , data)=>{
       if(err){
        console.error("Error in reading file",err);
        return;
       }

       console.log(`Content of ${fileName} : ${data}`);
    });

}

module.exports = {readFile}