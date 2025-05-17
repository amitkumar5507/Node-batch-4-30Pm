const express = require('express');
const http = require('http');
const path = require('path');
const webSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new webSocket.Server({ server });

wss.on('connection', (ws) => {
    console.log('Client connected');
    
    ws.on('message', (mes) => {
        const msgStr = mes.toString('utf-8'); 
        wss.clients.forEach((client) => {
            if (client.readyState === webSocket.OPEN) {
                console.log(mes,"ckmkfv");
                
                client.send(msgStr);
            }
        });
    });

    ws.on('close', () => console.log('client disconnected'));
});

// Serve static HTML/CSS/JS from public folder
app.use(express.static(path.join(__dirname, 'public')));

// Optional: fallback route (e.g., refresh fallback to index.html)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

server.listen(8000, () => console.log('server running on port 8080'));
