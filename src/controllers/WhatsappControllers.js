const fs = require('fs');
const myConsole = new console.Console(fs.createWriteStream('./log.txt'));

const VerifyToken = (req, res) => {

    try{

        const whatsAppToken = process.env.myWhatsAppToken;
        const verifyToken = req.query['hub.verify_token'];
        const challenge = req.query['hub.challenge'];

        if(verifyToken != null && challenge != null && verifyToken === whatsAppToken){
            res.send(challenge);
        } else {
            res.status(400).send();
        }

    } catch(e){
        res.status(400).send();
    }

}

const ReceivedMessage = (req, res) => {

    res.send("Received Message")
    /*
    try{

        let entry = (req.body['entry'])[0];
        let changes = (entry['changes'])[0];
        let value = changes["value"];

        const messageString = JSON.stringify(value);
        const messageObject = JSON.parse(messageString);

        myConsole.log(messageString);
        res.send("EVENT_RECEIVED");

    } catch(e){
        myConsole.log(e);
        res.send("EVENT_RECEIVED");
    }
    */

}

const TVerifyToken = (req, res) => {
    res.send("TVerifyToken")
}

const TReceivedMessage = (req, res) => {
    res.send("TReceived Message")
}

module.exports = {
    VerifyToken,
    ReceivedMessage,
    TVerifyToken,
    TReceivedMessage
}