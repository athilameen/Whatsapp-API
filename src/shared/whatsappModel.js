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
                    }
                ]
            }
        }
    };

    return data;

}

module.exports = {
    messageText,
    messageList
}