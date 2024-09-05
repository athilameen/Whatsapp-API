const express = require("express");
const os = require('os')
const fs = require('fs');
const whatsapp = require("./controllers/whatsapp");

const router = express.Router();

router.get("/whatsapp", whatsapp.VerifyToken);
router.post("/whatsapp", whatsapp.ReceivedMessage);
router.get("/logs", whatsapp.Logs);

/* Cloud storage: AWS S3, Google Cloud Storage, etc
router.get("/logs", (req, res) => {

    // Read the log file
    fs.readFile('logs.txt', 'utf8', (err, data) => {
        if (err) {
            // If an error occurs (e.g., file not found), send an error response
            return res.status(500).json({ message: 'Error reading log file', error: err });
        }

        // Send the file content as the response
        res.status(200).send(data);
    });

});
*/

router.get("/health", (req, res) => {
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

module.exports = router;