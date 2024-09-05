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

    } catch(err){
        res.status(400).send();
    }
    
}

const ReceivedMessage = (req, res) => {
    res.send('message')
}

module.exports = {
    VerifyToken, ReceivedMessage,
    ReceivedMessage
}