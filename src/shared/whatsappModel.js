function messageText(message, number){
    const data = {
        "messaging_product": "whatsapp",
        "to": number,
        "type":"text",
        "text":{
            "preview_url": true,
            "body": message
        }
    };

    return data;
}

function messageList(number){

    const data = {
        "messaging_product": "whatsapp",
        "to": number,
        "type":"interactive",
        "interactive": {
            "type": "list",
            "header": {
                "type": "text",
                "text": "Digital Evolutions"
            },
            "body": {
                "text": "We have doing multiple services"
            },
            "footer": {
                "text": "by DE"
            },
            "action": {
                "button": "Select Services",
                "sections": [
                    {
                        "title": "Digital Evolutions",
                        'rows': [
                            {
                                "id": "de-web",
                                "title": "Website",
                                "description": "We’ve spent the last 2 decades as web designers in Dubai" 
                            },
                            {
                                "id": "pricing",
                                "title": "Pricing",
                                "description": "Price catalog" 
                            }
                        ]
                    },
                    {
                        "title": "Connect with us",
                        'rows': [
                            {
                                "id": "agency",
                                "title": "Agency",
                                "description": "Digital Evolutions in Dubai" 
                            },
                            {
                                "id": "contact",
                                "title": "Contact",
                                "description": "Feel free contact at any time" 
                            }
                        ]
                    }
                ]
            }
        }
    };

    return data;

}

function messageProducts(number){

    const data = {
        "messaging_product": "whatsapp",
        "to": number,
        "type":"interactive",
        "interactive": {
            "type": "button",
            "header": {
            "type": "text",
            "text": "Buy a Product"
            },
            "body": {
            "text": "You can purchase via one click"
            },
            "footer": {
            "text": "by DE"
            },
            "action": {
            "buttons": [
                {
                "type": "reply",
                "reply": {
                    "id": "laptop",
                    "title": "Laptop" 
                }
                },
                {
                "type": "reply",
                    "reply": {
                        "id": "computer",
                        "title": "Computer" 
                    }
                },
                {
                    "type": "reply",
                    "reply": {
                        "id": "headphone",
                        "title": "Headphone" 
                    }
                },
            ] 
            }
        }
    };

    return data;

}

function messageLocation(number){

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

function messageImage(number){

    const data = {
        "messaging_product": "whatsapp",
        "to": number,
        "type":"image",
        "image":{
            "link": "https://img.lovepik.com/element/45012/8521.png_860.png"
        }
    };

    return data;

}

function messageAudio(number){

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

function messageVideo(number){

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

function messageDocument(number){

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

module.exports = {
    messageText,
    messageList,
    messageProducts,
    messageLocation,
    messageImage,
    messageAudio,
    messageVideo,
    messageDocument,
}