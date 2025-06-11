let arr =  [1, [2, 3], [4, [5, 6]]]
let flatArr = []

for(let i=0; i<arr.length; i++) {
    if(typeof arr[i] === 'number'){
        flatArr.push(arr[i])
    } else {
    for(let j=0; j<arr[i].length; j++) {
        if(typeof arr[i][j] === 'number'){
            flatArr.push(arr[i][j])
        } else {
            for (let k=0; k<arr[i][j].length; k++) {
                flatArr.push(arr[i][j][k]);
            }
        }
    }
}
}

console.log(flatArr);

