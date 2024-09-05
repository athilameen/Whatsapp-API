const fs = require('fs');
let logs = [];

/* Cloud storage: AWS S3, Google Cloud Storage, etc
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
*/

// Custom logger function that stores logs in memory
const logToMemory = (message) => {
    const logMessage = `${new Date().toISOString()} - ${message}`;
    logs.push(logMessage); // Store log in memory
    console.log('Log stored in memory.');
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
        //console.log('Received data:', value);
        let getData = getTextUser(value);
        logToMemory(`Received data: ${getData}`);
        //logToMemory(`Received data: ${JSON.stringify(value)}`);
        //logToFile(`Received data: ${JSON.stringify(value)}`);
        res.send("EVENT_RECEIVED");

    } catch(e){
        //logToFile(`Error : ${e}`);
        logToMemory(`Error: ${e}`);
        res.send("EVENT_RECEIVED");
    }
}

exports.Logs = (req, res) => {
   // Return logs from memory
   res.status(200).json(logs);
}

const getTextUser = (getMessage) => {
    
    let text = "";
    const message = getMessage['messages'][0];
    let typeMessage = message['type'];    

    if(typeMessage === "text"){
        text = (message['text'])['body'];
    } else if(typeMessage === "interactive"){

        let interactiveObject = message['interactive'];
        let typeInteractive = interactiveObject['type'];

        if(typeInteractive === "button_reply"){
            text = (interactiveObject['button_reply'])['title'];
        } else if(typeInteractive === "list_reply"){
            text = (interactiveObject['list_reply'])['title'];
        } else {
            text = "No message";
        }

    } else {
        text = "No message.";
    }

    return text;
}