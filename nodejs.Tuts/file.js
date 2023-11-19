// const { log } = require('console');
const fs = require ('fs')

// lets read a file
// for the readfile which is method in the fs module,it takes in two arguments,the first is the rel path and the 2nd is the ftn that would run as soon as the rel path is true


// fs.readFile('./document/data1.txt',(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// }
// )
// console.log('our last line of code');


// writeFile would take 3 argument,first is the relative part,secondly the text to write and lastly the ftn that would fire as soon as the parameters are met

fs.writeFile('/document/data1.txt', 'we don rum am!!!',()=>{
    console.log('file written');
} 
)

//if we run this file again but this time on a rel path that doesnt exist,the writeFile would create the file write a text in it

fs.writeFile('./document/data2.txt', 'we don rum am!!!',()=>{
    console.log('file created and written');
} 
)

//directories

// fs.mkdir('./assets',(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log('directory created');
// }
// )

if(fs.existsSync('/assets')){
    fs.mkdir('./assets',(err)=>{
        if(err){
            console.log(err);
        }
    })
    console.log('directory created');
}else{
    fs.rmdir('./assets',(err)=>{
        if(err){
            console.log('err');
        }
        console.log('directory deleted');
    })
}

//deleting a file
//fs.unlink() method is used to delete a file in node.js

if(fs.existsSync('./document/deletFile.txt')){
fs.unlink('./document/deletFile.txt',(err)=>{
    if(err){
        console.log(err);
    }
    console.log('file deleted');
}
)
}else{
    fs.writeFile('./document/deleteFile.txt','written',()=>{
        console.log('the work is done');
    }
    )
}