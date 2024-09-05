const { Router } = require('express')
const os = require('os')
const fs = require('fs');
//const whatsappController = require("./controllers/WhatsappControllers");

const routes = Router();

//routes.get("/whatsapp", whatsappController.VerifyToken).post("/whatsapp", whatsappController.ReceivedMessage);
//routes.get("/twhatsapp", whatsappController.TVerifyToken).post("/twhatsapp", whatsappController.TReceivedMessage);

routes.get("/log", (req, res) => {
    
    // Path to the text file
    const filePath = './log.txt';

    // Read the file
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file', err);
            return res.status(500).send('Failed to read the file');
        }
        // Send the file content as a response
        res.send(data);
    });

});

routes.get("/health", (req, res) => {
    const healthInfo = {
        uptime: process.uptime(),
        message: "OK",
        timestamp: Date.now(),
        hostname: os.hostname(),
        platform: os.platform(),
        pid: process.pid,
        version: process.version,
        memory: process.memoryUsage(),
    };
    res.send(healthInfo);
});

module.exports = routes;