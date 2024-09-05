const fs = require('fs');

const logToFile = (message) => {
    const logMessage = `${new Date().toISOString()} - ${message}\n`;
    // Append the message to a log file
    fs.appendFile('logs.txt', logMessage, (err) => {
        if (err) {
            console.error('Failed to write to log file:', err);
        } else {
            console.log('Log written to file.');
        }
    });
};

exports.VerifyToken = (req, res) => {

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

exports.ReceivedMessage = (req, res) => {
    try{
        let entry = (req.body['entry'])[0];
        let changes = (entry['changes'])[0];
        let value = changes["value"];

        const messageString = JSON.stringify(value);
        const messageObject = JSON.parse(messageString);

        // Log the data to the console and write to file
        console.log('Received data:', value);
        logToFile(`Received data: ${JSON.stringify(value)}`);
        res.send("EVENT_RECEIVED");

    } catch(e){
        logToFile(`Error : ${e}`);
        res.send("EVENT_RECEIVED");
    }
}

exports.TVerifyToken = (req, res) => {
    res.send("TVerifyToken")
}