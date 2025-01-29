// this module is responsible for reading the content present inside a directory and listing them out

const fs = require("fs");

function listFiles(directory){
    fs.readdir(directory,(err, files)=>{
        if(err){
            console.log("Error reading directory",err);
            return;
        }
        console.log('Files in directory :', directory);
        files.forEach(file => console.log(file));
    });
}

module.exports = {listFiles}