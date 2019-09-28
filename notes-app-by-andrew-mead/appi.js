const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./note.js')



yargs.version('1.1.0')
// Adding notes
yargs.command({
    command:'add',
    describe: 'to add a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOptions: true,
            type: 'string'
        },

        body: {
            describe: 'Note Body',
            demandOptions: true,
            type: 'string'
        }
    },
    handler: function(argv){
        console.log('Adding a note', "Title: " + argv.title)
        console.log('Adding a note',"Body: " + argv.body)

    }
})

//Removing notes
yargs.command({
    command:'remove',
    description: 'to add a note',
    handler: function(){
        console.log('Removing a note')
    }
})

//Listing notes
yargs.command({
    command:'list',
    description: 'to list all notes',
    handler: function(){
        console.log('Listing all notes')
    }
})

//Reading notes
yargs.command({
    command:'read',
    description: 'to read a note',
    handler: function(){
        console.log('Reading note')
    }
})

yargs.parse()
//console.log(yargs.argv)
