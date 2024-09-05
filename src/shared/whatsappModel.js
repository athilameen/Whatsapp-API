function messageText(message, number){
    const data = {
        "messaging_product": "whatsapp",
        "to": number,
        "type":"text",
        "text":{
            "body": message
        }
    };

    return data;
}

module.exports = {
    messageText
}