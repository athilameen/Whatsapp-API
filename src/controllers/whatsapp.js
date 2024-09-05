const fs = require('fs');
const {whatsappService} = require('../services/whatsappService');
const sendON = require('../shared/sendModels');

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
            logToMemory(`Received data: ${messageData}`);
            //logToFile(`Received data: ${JSON.stringify(value)}`);
            const number = messages['from'];

            const sendType = messageData;      
            console.log(sendType);
            console.log(number);

            if(sendType === "text"){
                const data = sendON.sendText("I am a "+messageData, number);
                await whatsappService(data)
            } else if(sendType === "image"){
                const data = sendON.sendImage(number);
                await whatsappService(data)
            } else if(sendType === "audio"){
                const data = sendON.sendAudio(number);
                await whatsappService(data)
            } else if(sendType === "video"){
                const data = sendON.sendVideo(number);
                await whatsappService(data)
            } else if(sendType === "document"){
                const data = sendON.sendDocument(number);
                await whatsappService(data)
            } else if(sendType === "button"){
                const data = sendON.sendButtons(number);
                await whatsappService(data)
            } else if(sendType === "list"){
                const data = sendON.sendList(number);
                await whatsappService(data)
            } else if(sendType === "location"){
                const data = sendON.sendLocation(number);
                await whatsappService(data)
            } else {
                const data = sendON.sendText("Don't understand", number);
                await whatsappService(data)
            }

            //await whatsappService(messageData, number)
            //.then(response => console.log('Success:', response))
            //.catch(err => console.error('Request failed:', err));
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