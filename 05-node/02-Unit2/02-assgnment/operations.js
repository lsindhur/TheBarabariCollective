//add new object
const fs = require('fs');

function readToNotes() {
    const data = fs.readFileSync('./notes.json', 'utf-8')
    return JSON.parse(data)
}

function writeToNotes(arr) {
     const updatedJSON = JSON.stringify(arr);
    fs.writeFileSync('./notes.json', updatedJSON)
}


function addNote(title,body) {
        const arr = readToNotes()
        arr.push({
            title:title,
            body:body
        })
        writeToNotes(arr);
        console.log('Note added!')     
}

function removeNote(title) {

}


module.exports = {addNote,removeNote}



/* function addNote(title,body) {
    //read the content in notes.json
    fs.readFile('./notes.json', 'utf-8', (err,data) => {
       // console.log(data);
        //push the new data into the notes array
        const arr = JSON.parse(data)
        arr.push({
            title:title,
            body:body
        })
        //console.log(arr);
        const updatedJSON = JSON.stringify(arr);
        fs.writeFile('./notes.json', updatedJSON, (err) => {
            if(!err) {
                console.log('success')
            }
        })
    })
} */
