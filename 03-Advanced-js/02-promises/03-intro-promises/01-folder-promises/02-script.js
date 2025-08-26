//async await makes the code even simpler to read


function getData(id) {
    return new Promise((resolve,reject)=> {
        if(id<10) {
            setTimeout(()=> {
            console.log(`data of ${id}`)
            resolve(`data sent for id ${id}`)
        },3000)
        } else {
            reject('error')
        } 
    })
}

async function showData() {
try {
    await getData(1);
    await getData(2);
    await getData(12);
}
  catch(err) {
    console.log(err);
  }
}

showData()











/* function getData(id) {
    return new Promise((resolve,reject)=> {
        setTimeout(()=> {
            if(id<5) {
                console.log(`data of ${id}`);
                resolve(`success for ${id}`)
            } else {
                reject(`Error:no data found for data id: ${id}`)
            }
        },4000)
    })
}

async function showData() {
    try{
        await getData(1);
    
    await getData(2);
    
    await getData(7);
    }
    
    catch(err) {
        console.log(err)
    }
}

showData();
 */


