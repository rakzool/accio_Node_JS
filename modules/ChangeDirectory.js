// this module is responsible for changing the directory to a new path if the path exists and is a directory

const fs = require("fs");
const path = require("path");

function changeDirectory (currentDir, newDir) {
    const newPath = path.resolve(currentDir,newDir);

    if(fs.existsSync(newPath) && fs.statSync(newPath).isDirectory()){
        console.log(`Changed pwd to : ${newPath}`);
        return newPath;
    }else{
        console.error("Inavalid Directory");
        return currentDir;
    }
}

module.exports = {changeDirectory}