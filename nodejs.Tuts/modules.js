const {AGES,trainees} = require('./trainees');
const os = require('os');
// const { log } = require('console');


console.log(AGES);
console.log(trainees);

// we have seen how to import(require) and export files,however Node,js has other built in modules and we can also require them
// console.log(os)
console.log(os.platform());
console.log(os.homedir());