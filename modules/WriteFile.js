// it takes the content from console and writes it to a file

const fs = require("fs");
const path = require("path");

function writeFile (directory, fileName , content) {

    const filePath = path.join(directory, fileName);

    fs.writeFile(filePath , content ,(err)=>{
        if(err){
            console.error("Error while writing file :" , err);
            return;
        }

        console.log(`File ${fileName} Written Succesfully at ${directory}.`);
    })
  
}

module.exports = {writeFile}