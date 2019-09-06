// learning to use a module in node
const util = require('./util.js')
const notes = require('./note.js')

let sum = util(52,64)
let note = notes()
console.log(sum,note)
