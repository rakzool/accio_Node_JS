const fs = require("fs");
const path = require("path");

const content = "Hello i am learning node js and learning this is fun";
const resourcePath = "./resources";
let fileData;

fs.writeFile("./resources/demo.txt",content,(err) =>{
  if(err){
    console.error("unable to write to file");
  }

  console.log("File Written Successfully !!!");
});


fs.readFile(path.join(resourcePath,"demo.txt"),'utf-8',(err,data)=>{
    if(err){
        console.error("unable to Read to file");
    }

    console.log(data);
})

const appendData = "\n And also i like football";

// fs.appendFile(path.join(resourcePath,"demo.txt"),appendData,(err)=>{
//     if(err){
//         console.error("unable to Append to file");
//       }

//       console.log("File Modified Successfully !!!");
// });

fs.unlink(path.join(resourcePath,"demo.txt"),(err)=>{
    if(err){
        console.error("unable to Delete to file");
      }

      console.log("File Deleted Successfully !!!");
})