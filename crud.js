const http = require('http');
const url = require('url');
const queryStr = require('querystring');

const users = [
    {id:1,name:'pritam',email:"hello@gam"},
    {id:2,name:"varun",email:"gklfkflgkf@gmail.com"}
]

const server  =  http.createServer((req,res)=>{
    const parseUrl  = url.parse(req.url,true);
    const pathname = parseUrl.pathname;
    const method = req.method;
    res.setHeader("Content-type",'application/json');
    if(pathname === '/users'){
        if(method ==='GET'){
            res.statusCode=200
            res.end(JSON.stringify(users))
        }
        else if(method === 'POST'){
            let body = '';
            req.on('data',chunk=>{
                body+=chunk;
            })
            req.on('end',()=>{
                const newUser = JSON.parse(body);
                newUser.id = users.length + 1;
                users.push(newUser);
                res.statusCode = 200;
                res.end(JSON.stringify({message:"user created successfully"}))
            })

        }else{
            res.statusCode = 400;
            res.end(JSON.stringify({message:"user not created successfully"}))
        }


    }

})

server.listen(8000,()=>{
    console.log('server running at 8000');
    
})