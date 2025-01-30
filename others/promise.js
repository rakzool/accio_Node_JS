let dataChunk = {
    a: 10,
    b : 10
}


function fetchData() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           resolve(dataChunk);
        },2000);
    })
}

fetchData()
.then((data) => {
    console.log(data);
    
    return data;
})
.then(data=>{
    const {a,b} = data;
    console.log(`a : ${a} , b : ${b}`);
    return a+b;
})
.then(sum=>{
    console.log(sum);
})
.catch((err) =>{
    console.error("error");
})
.finally(() =>{
    console.log("cleanup");
})