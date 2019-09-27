const util = require('./util.js')
const notes = require('./note.js')
const validator = require('validator')
const chalk = require('chalk')

let sum = util(52,64)
let note = notes()
console.log(sum,note)
//console.log(validator.isEmail('gfgdgh@jfjfj.com.nhg'))
console.log(chalk.bold.blue.inverse('success!!!'))
const error = chalk.bold.red;
const warning = chalk.keyword('orange');
 
console.log(error('Error!'));
console.log(warning.inverse('Be Warned in Your Life!'));