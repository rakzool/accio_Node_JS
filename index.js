const {listFiles} = require("./modules/ListFiles");
const {readFile} = require("./modules/ReadFiles");
const {changeDirectory} = require("./modules/ChangeDirectory");
const {writeFile} = require("./modules/WriteFile");

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let currentDir = process.cwd();

console.log(`Current Directory : ${currentDir}`);

function prompt() {
  rl.question('Enter command (ls, cat <file> , write <path> <file> <content>,cd <dir>, cat <file>,exit) : ', (input) => {
    const args = input.split(' ');
    const command = args[0];

    switch(command) {
      case 'ls':
        listFiles(currentDir);
        break;
      case 'cat':
        if(args[1]) readFile(currentDir, args[1]);
        else console.log("please specify a file to read");
        break;
      case 'write':
        if(args[1] && args[2] && args[3]) writeFile(args[1],args[2], args.slice(3).join(' '));
        else console.log('Usage: write <path> <file> <content>');
        break;
      case 'cd':
        if(args[1]) currentDir = changeDirectory(currentDir,args[1]);
        else console.log('Please specify a directory');
        break;
      case 'exit':
        rl.close();
        return;
      default:
        console.log("Unknown command");

    }
    prompt();
  });

}


prompt();