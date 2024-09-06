function sendText(message, number){

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
                "text": "Food Festival"
            },
            "body": {
                "text": "We have multiple food items"
            },
            "footer": {
                "text": "by DE"
            },
            "action": {
                "button": "Select favorite food",
                "sections": [
                    {
                        "title": "Vegetarian",
                        'rows': [
                            {
                                "id": "full-meals",
                                "title": "Full Meals",
                                "description": "Explore The Best Full Meals" 
                            },
                            {
                                "id": "curd-rice",
                                "title": "Curd Rice",
                                "description": "Explore The Best Curd Rice" 
                            }
                        ]
                    },
                    {
                        "title": "Non-Vegetarian",
                        'rows': [
                            {
                                "id": "biryani",
                                "title": "Biryani",
                                "description": "Explore The Best Mutton Biryani" 
                            },
                            {
                                "id": "chicken-noodles",
                                "title": "Chicken Noodles",
                                "description": "Explore The Best Chicken Noodles" 
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
            "latitude": "25.252930286015317",
            "longitude": "55.30157486245174",
            "name": "Digital Evolutions",
            "address": "Burjuman Business Center Floor 13, Office 56 - Dubai - United Arab Emirates"
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