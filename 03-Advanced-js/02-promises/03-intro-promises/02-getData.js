//real life examble
//settimeout inside getData();


function getData(id,getNextData) {
    setTimeout(()=> {
        console.log(`data of ${id}`)
        if(getNextData) {
            getNextData()
        }
    },3000)
}

getData(1, ()=> {
    getData(5, ()=> {
        getData(6, ()=> {
            getData(7);
        })
    });
})















/* function getData(dataId,getNextData) {
    setTimeout(() => {
        console.log(`data of ${dataId}`)
        if(getNextData) {
            getNextData()
        }   
    },2000)
}

getData(123, ()=> {
    console.log('fetching data...')
    getData(456, ()=> {
        console.log('fetching data...')
        getData(789)
    });
})  */

