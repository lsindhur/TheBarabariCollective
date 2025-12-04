    const fs = require('fs');
    const readline = require('readline');
    const {addNote, removeNote} = require('./operations')

    const rl = readline.createInterface({
        input: process.stdin,
        output:process.stdout
    })

    rl.question("What do you want to do? (add / list / read / remove / update): ", (command)=> {
        if(command === 'add') {
            rl.question('What is the title?', (title) => {
                rl.question('What is the body?', (body) => {
                    addNote(title,body)
                })
            })
        }

        if(command === 'remove') {
            rl.question('What is the title?', (title) => {
                    removeNote(title)
            })
        }
    })


