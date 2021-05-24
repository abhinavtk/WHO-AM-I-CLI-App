var readlineSync = require('readline-sync');

var name = readlineSync.question('What is your name? ')
var welcomeMsg = 'Welcome '+ name + ' to learning JavaScript!'

console.log(welcomeMsg);