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


async function handelFetchData(){
    try{

        const data = await fetchData();
    console.log(data);
    const {a,b} = dataChunk;
    console.log(`a : ${a} , b : ${b}`);
    console.log(a+b);

    }catch(err){

        console.log("error");
    }
}

handelFetchData();

console.log("start");
