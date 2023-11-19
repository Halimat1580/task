globalThis.setTimeout(() => {
    console.log('in the timeout');
    clearInterval(INT)
}, 3000);



const INT = setInterval(() =>{
    console.log('in the interval');
}, 1000)


// So they are more things available in nodejs
console.log(__dirname);
console.log(__filename);
