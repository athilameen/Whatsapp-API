const { Router } = require('express')
const fs = require('fs');
const routes = Router();
const whatsappController = require("./controllers/WhatsappControllers")

routes.get("/whatsapp", whatsappController.VerifyToken).post("/whatsapp", whatsappController.ReceivedMessage);
routes.get("/twhatsapp", whatsappController.TVerifyToken).post("/twhatsapp", whatsappController.TReceivedMessage);

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
module.exports = routes;