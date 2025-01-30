let dataChunk = {
    a: 10,
    b : 10
}

function fetchData(callback,callbackTwo) {
  setTimeout(() => {
    console.log(dataChunk)
    callback(callbackTwo);
  },2000);
}

console.log("this will print first");

function dataProcessor(callbackTwo) {
    const {a,b} = dataChunk;
    console.log(`a : ${a} , b : ${b}`);
    callbackTwo(a,b);
}

function afterDataProcess(a,b){
   console.log(a+b);
}

fetchData(dataProcessor,afterDataProcess);