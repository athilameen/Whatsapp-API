const app = require("express");
const router = app.Router();
const whatsappController = require("../controllers/WhatsappControllers")

router.get("/", whatsappController.VerifyToken).post("/", whatsappController.ReceivedMessage);

module.exports = router;