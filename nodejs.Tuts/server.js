const http = require('http');
const fs = require('fs')


//==================================
//creating a serve, sending text/plain
//=====================================
// const server = http.createServer((req,res)=>{
//     console.log('request made');
//     console.log(req,req.method);
//     res.setHeader('content-Type','text/plain')
//     res.write('hello world')
//     res.end()
// })

// server.listen(7070,'localhost',()=>{
//     console.log('listening for request on port 7070');
// })

//lets send html element and not a plain text


// const server = http.createServer((req,res)=>{
//     console.log('request made');
//     console.log(req,req.method);
//     res.setHeader('content-Type','text/html')
//     fs.readFile('./views/index.html',(err,data)=>{
//         if(err){
//             console.log(err);
//             res.end()
//         }else{
//             res.write(data)
//             res.end()
//         }
//     }
//     )
   
// })

// server.listen(7070,'localhost',()=>{
//     console.log('listening for request on port 7070');
// })

//Basic Routing
//lets try to route to diff pages,cause right now if you input on the browser localhost:7070/about---it would throw an error---so lets try and route to diff pages

// let path ='./views'

// const server = http.createServer((req,res)=>{

//     res.setHeader('content-Type','text/html')
//     switch(req.url){
//         case '/':
//         path += '/index.html';
//         break
//         case"/about":
//         path += "/about.html";
//         break
//         default:
//             path += '/404.html'

//     }
//     fs.readFile('./views/index.html',(err,data)=>{
//         if(err){
//             console.log(err);
//             res.end()
//         }else{
//             res.write(data)
//             res.end()
//         }
//     }
//     )
//     fs.readFile('./views/about.html',(err,data)=>{
//         if(err){
//             console.log(err);
//             res.end()
//         }else{
//             res.write(data)
//             res.end()
//         }
//     }
//     )
   
// })




// server.listen(7070,'localhost',()=>{
//     console.log('listening for request on port 7070');
// })

//=========================================================================
//status code
//===========================================================================
//.. 100 for info response
//.. 200 Range means everythings is ok
//.. 300 range means the resource has been moved or redirected
//.. 400 range means clients error
//..500 range server error code

let path ='./views'

const server = http.createServer((req,res)=>{

    res.setHeader('content-Type','text/html')
    switch(req.url){
        case '/':
        path += '/index.html';
        res.statusCode = 200;
        break
        case"/about":
        path += "/about.html";
        res.statusCode = 200;
        break;
        default:
            path += '/404.html';
            res.statusCode = 404;

    }
    fs.readFile('./views/index.html',(err,data)=>{
        if(err){
            console.log(err);
            res.end()
        }else{
            res.write(data)
            res.end()
        }
    }
    )
    fs.readFile('./views/about.html',(err,data)=>{
        if(err){
            console.log(err);
            res.end()
        }else{
            res.write(data)
            res.end()
        }
    }
    )
   
})




server.listen(7070,'localhost',()=>{
    console.log('listening for request on port 7070');
})
