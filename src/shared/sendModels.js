function sendText(number, message){

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

function sendImage(number){

    const data = {
        "messaging_product": "whatsapp",
        "to": number,
        "type":"image",
        "image":{
            "link": "https://digitalevolutions.ae/wp-content/themes/de/assets/images/Digital-Evolutions-Logo-white.png"
        }
    };

    return data;

}

function sendAudio(number){

    const data = {
        "messaging_product": "whatsapp",
        "to": number,
        "type":"audio",
        "audio":{
            "link": "https://samplelib.com/lib/preview/mp3/sample-3s.mp3"
        }
    };

    return data;

}

function sendVideo(number){

    const data = {
        "messaging_product": "whatsapp",
        "to": number,
        "type":"video",
        "video":{
            "link": "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
            "caption": "Sample Video"
        }
    };

    return data;

}

function sendDocument(number){

    const data = {
        "messaging_product": "whatsapp",
        "to": number,
        "type":"document",
        "document":{
            "link": "https://pdfobject.com/pdf/sample.pdf",
            "caption": "Sample PDF File"
        }
    };

    return data;

}

function sendButtons(number){

    const data = {
        "messaging_product": "whatsapp",
        "to": number,
        "type":"interactive",
        "interactive": {
            "type": "button",
            "header": {
            "type": "text",
            "text": "Registration"
            },
            "body": {
            "text": "Please select one button"
            },
            "footer": {
            "text": "by DE"
            },
            "action": {
            "buttons": [
                {
                "type": "reply",
                "reply": {
                    "id": "button001",
                    "title": "👍Yes" 
                }
                },
                {
                "type": "reply",
                "reply": {
                    "id": "button002",
                    "title": "👎No" 
                }
                }
            ] 
            }
        }
    };

    return data;

}

function sendList(number){

    const data = {
        "messaging_product": "whatsapp",
        "to": number,
        "type":"interactive",
        "interactive": {
            "type": "list",
            "header": {
                "type": "text",
                "text": "Select Options"
            },
            "body": {
                "text": "Please select one button"
            },
            "footer": {
                "text": "by DE"
            },
            "action": {
                "button": "Selected Options",
                "sections": [
                    {
                        "title": "One options",
                        'rows': [
                            {
                                "id": "first-option",
                                "title": "Option First",
                                "description": "This is the option one" 
                            },
                            {
                                "id": "sec-option",
                                "title": "Option Second",
                                "description": "This is the option two" 
                            }
                        ]
                    },
                    {
                        "title": "Two options",
                        'rows': [
                            {
                                "id": "first-two-option",
                                "title": "Option First Sec",
                                "description": "This is the option one sec" 
                            },
                            {
                                "id": "sec-two-option",
                                "title": "Option Second Sec",
                                "description": "This is the option two sec" 
                            }
                        ]
                    }
                ]
            }
        }
    };

    return data;

}

function sendLocation(number){

    const data = {
        "messaging_product": "whatsapp",
        "to": number,
        "type":"location",
        "location":{
            "latitude": "13.08118784628054",
            "longitude": "80.28761298672104",
            "name": "Fort St George",
            "address": "Chennai, Tamil Nadu"
        }
    };

    return data;

}

module.exports = {
    sendText,
    sendImage,
    sendAudio,
    sendVideo,
    sendDocument,
    sendButtons,
    sendList,
    sendLocation,
}