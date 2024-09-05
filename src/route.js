const express = require("express");
const os = require('os')
const fs = require('fs');
const whatsappController = require("./controllers/WhatsappControllers");

const router = express.Router();

//router.get("/whatsapp", whatsappController.VerifyToken);
//router.post("/whatsapp", whatsappController.ReceivedMessage);

router.get("/twhatsapp", whatsappController.TVerifyToken)
router.post("/twhatsapp", whatsappController.TReceivedMessage);

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