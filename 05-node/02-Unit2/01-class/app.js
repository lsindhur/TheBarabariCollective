const fs = require('fs');

/* const content= fs.readFileSync('./Files/input.txt', 'utf-8');
console.log(content);

let textIn = `${content}, ${new Date()}`

fs.writeFileSync('./Files/output.txt',textIn); */

fs.readFile('./Files/starter.txt', 'utf-8', (error1,data1) => {
    fs.readFile(`./Files/${data1}.txt`, 'utf-8', (error2,data2) => {
        const textIn = `${data1}, ${data2}, ${new Date()}`
        fs.writeFile('./Files/output.txt',textIn, (err)=> {
           if(!err) {
            console.log('success')
           }
        })
    })
})




























/* const fs = require('fs');

fs.readFile('Files/starter.txt','utf-8', (error1,data1) => {
    console.log(data1);
    fs.readFile(`Files/${data1}.txt`,'utf-8', (error2,data2) => {
        console.log(data2);
        fs.readFile('Files/append.txt','utf-8', (error3,data3)=> {
            console.log(data3);
            fs.writeFile('Files/output.txt', `${data2}\n\n${data3}\nDate now is${new Date} `, () => {
                console.log(`File written to successfully`)
            })
        })
    })
}) */
