const http = require('http')
const url = require('url');

let items = [];
let id = 1;

const server = http.createServer((req,res)=>{
    const parseUrl = url.parse(req.url,true);
    let method = req.method;
    const pathname = parseUrl.pathname;

    const sendJson = (status,data)=>{
        res.writeHead(status,{'content-type':'application/json'})
        res.end(JSON.stringify(data))
    }
    const parseBody = (req,cb)=>{
        let body = '';
        req.on('data',chunk => body+=chunk);
        req.on('end',()=>{
            try{
                const parsed = JSON.parse(body);
                cb(null,parsed)
            }
            catch(err){
                cb(err)
            }
        })
    }
    if(pathname === '/students' && method === 'GET'){
        sendJson(200,items)
    }
    else if(pathname === '/student' && method === 'POST'){
        parseBody(req,(err,body)=>{
            if(err) return sendJson(400,{error:"invalid json"})
                // console.log("ddddd",body.parseBody(req),"wwwwww");
                
                const newItem = {id:id++,...body};
            items.push(newItem)
            sendJson(201,newItem)
        })
    }
    else if (pathname.startsWith('/student/') && method === 'GET'){
        const itemId =parseInt(pathname.split('/')[2]);
        const item = items.find(i=>i.id === itemId);
        if(!item){
            return sendJson(404,{error:'item not found'})
        }
        sendJson(200,item)
    }
    else if(pathname.startsWith('/student/') && method === 'PUT'){
        const itemId =parseInt(pathname.split('/')[2]);
        console.log(itemId);
        
        const item = items.find(i=>i.id === itemId);
        if(!item){
            return sendJson(404,{error:'item not found'})
        }
        parseBody(req,(err,body)=>{
            if(err) return sendJson(400,{error:"invalid JSON"})
                Object.assign(item,body);
                sendJson(200,item)
        }) 
    }
    else if(pathname.startsWith('/student/') && method === 'DELETE'){
        const itemId =parseInt(pathname.split('/')[2]);
        const item = items.findIndex(i=>i.id === itemId);
        if(item === -1){
            return sendJson(404,{error:'item not found'})
        }
        const deleted = items.splice(item,1);
        sendJson(200,deleted[0]);
    }
    else if(pathname === '/deleteAll' && method === 'DELETE'){
        items =[];
        sendJson(200,{success: 'deleted successfully'});

    }

    else if(pathname === '/markstatus' && method === 'PUT'){
        parseBody(req,(err,body)=>{
            if(err) return sendJson(400,{error:"invalid json"})
                // console.log("ddddd",body.parseBody(req),"wwwwww");
            let updateArr = items
            if(body.isActive ===true){
                   updateArr= items.map((val,i)=>{return{...val,isActive : true}})
            }
            else{
               updateArr= items.map((val,i)=>{return{...val,isActive : false}})
            }
            
                
                // const newItem = {id:id++,...body};
            items = updateArr
            sendJson(201,items)
        })
    }

    else{
        sendJson(404,{error:'route not found'})
    }
})

server.listen(4000,()=>{
    console.log('running on 4000');
    
})