const fs = require('fs')

//there are diff type of streams,read,write

const readStream = fs.createReadStream('./document/blog.txt')

readStream.on('data', (content)=> {
    // console.log(content);
    console.log(content.toString());
}
)

//writeStreams

const writeStream = fs.createWriteStream('./document/blog2.txt')

writeStream.on('data',(content)=>{
    console.log('-----New Content-----');
    console.log(content.toString());
    writeStream.write(content)
}
)