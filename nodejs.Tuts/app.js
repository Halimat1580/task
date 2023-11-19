const express = require ('express');
const app = express();
// Benefits of using express
//No need to put localhost in the server,as express has taken care of that
//No need to put status code,although they are times we may manually type it out
//No need to manually insert setHeader('plain/html')
//We can still say res.writen();but in express we can just say res.send()
//No need to set http
//When sending our rel paths,i.e html pages,we need to instruct that the path is {root:__dirname} if not express would go for an absolute path(the system root dir)
//for the 404 in express, we use .use(); this must be at the bottom of all other routes cause it doesnt contain a rel path and foreach req mode,this would run...so if you put it after the home page and type in about page on your browser,it would pick 404 page cos it would always match 

app.get('/',(req,res)=>{
    res.sendFile('./views/index.html',{root:__dirname})
}
)

app.get('/about',(req,res)=>{
    res.sendFile('./views/about.html',{root:__dirname});
}
)

app.get('/about-us',(req,res)=>{
    res.redirect('/about')
}
)


app.use((req,res)=>{
    res.status(404).sendFile('./views/404.html',
    {root:__dirname})
}
)

app.listen(8080,()=>{
    console.log('app turning on port 8080');
}
)