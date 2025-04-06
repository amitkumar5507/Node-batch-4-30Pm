// const fs = require('fs')
// const os = require('os')
// const path  = require('path')

// // console.log(os.platform());
// // console.log(os.arch());
// // console.log(os.cpus());
// // console.log((os.freemem()/1024)/1024/1024);

// // console.log(os.totalmem()/1024/1024/1024);
// // console.log(os.uptime());
// // console.log(os.hostname());
// // console.log(os.networkInterfaces());
// // console.log(os.tmpdir())
// // console.log(os.type());
// // console.log(os.version());
// let filepath ='C:/Users/Pritam/AppData/Local/Temp/hello.txt'
// fs.appendFile(filepath,"vkfmvfvmfkvmfkvmfkvmfkvfmvf",(err)=>{
//     if(err){
//         console.log(err);
        
//     }
//     console.log("hnji bn gayi file");
    
// })
// console.log(path.basename(filepath,'.txt'));
// console.log(path.dirname(filepath));
// console.log(path.extname(filepath));
// console.log(path.join(filepath,'user','file.txt'));










// // const data = fs.readFileSync('./hello.txt','utf-8')
// // fs.writeFileSync('./hello.txt'," hello world")
// // fs.appendFileSync('./hello.txt',"\nhi hi hi ")
// // fs.renameSync('./hello.txt','hi.txt')
// // // console.log(data);
// // fs.unlinkSync('./hi.txt')
// // fs.mkdirSync('./temp')
// // fs.rmdirSync('./temp')
// // console.log(fs.existsSync('./paragraph'));

// // if (!fs.existsSync('./paragraph')) {

// //     fs.mkdirSync('./paragraph')
// // }
// // else {
// //     fs.writeFileSync('./paragraph/myself.txt', "ffff")
// // }

// // fs.readFile('./paragraph/myself.txt','utf-8',(err,data)=>{
// //     if(err){
// //         return err
// //     }
// //     console.log(data);
    
// // })
// // fs.writeFile('./paragraph/myself.txt',"fjjklsmklsmskldmskldmskldmskl0",(err)=>{
// //     if(err){
// //         console.log(err);
        
// //     }
// // })
// // fs.appendFile('./paragraph/myself.txt','\nelse;ldmdfksmkemsfdlkfmklef',(err)=>{
// //     if(err){
// //         console.log(err);
        
// //     }
// // })
const http = require('http');
const  URL  = require('url');


const server  =  http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('content-Type','text/plain');
//     const resObj = {
//         message:"hello",
//         status:"success",

//     }
//     let htmlCode = `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <h1>hello</h1>
//     <button>fff</button>
// </body>
// </html>`
    // if(req.method ==='GET'){
    //     if(req.url)
    // }
    let body ="";
    req.on('data',chunk=>{
        console.log(JSON.parse(chunk));
        
        body+=chunk

    })
    req.on('end',()=>{
        if(body){
            try{
            body += JSON.parse(body)
            }
            catch(err){
                body=null
            }
        }
    })
    
    console.log(req,"dddd");
    console.log({method:req.method,url:URL.parse(req.url)});

    
    res.end("ok")
})

server.listen(8000,()=>{
    console.log('server running at 8000');
    
})

// Headers POST/GET/PUT/PATCH/DEL
// params POST/GET/PUT/PATCH/DEL
// queryParams POST/GET/PUT/PATCH/DEL
// body  POST/PUT/PATCH/DEL

