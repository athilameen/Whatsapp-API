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
                    },
                    {
                        "title": "Digital Evolutions",
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

function messageBuy(number){

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
                }
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

module.exports = {
    messageText,
    messageList,
    messageBuy,
    messageLocation
}