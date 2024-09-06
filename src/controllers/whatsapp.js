const fs = require('fs');
const processMessage = require("../shared/processMessage");

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

exports.ReceivedMessage = async (req, res) => {
    try{
        let entry = (req.body['entry'])[0];
        let changes = (entry['changes'])[0];
        let value = changes["value"];
        let messageObject = value['messages'];

        if(typeof messageObject != "undefined"){
            let messages = messageObject[0];
            let messageData = getTextUser(messages);
            
            const number = messages['from'];

            if(messageData){
                logToMemory(`Received data: ${messageData} => ${number}`);
                //logToFile(`Received data: ${JSON.stringify(value)}`);
                await processMessage.process(messageData, number);
            }
        
        }
        
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

const getTextUser = (message) => {
    
    let text = "";
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
        text = "No message. ";
    }

    return text;
}