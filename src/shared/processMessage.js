const whatsappModel = require("../shared/whatsappModel");
const {whatsappService} = require("../services/whatsappService");

async function process(textUser, number){

    textUser = textUser.toLowerCase();
    let models = [];

    if(textUser.includes("hi")){
        const model = whatsappModel.messageText("Hi! How can I help you today?", number);
        models.push(model);
    } else if(textUser.includes("hello")){
        const model = whatsappModel.messageText("Hello! How may I assist you?", number);
        models.push(model);
    } else if(textUser.includes("event")){
        const model = whatsappModel.messageText("Yes! Food festival going", number);
        models.push(model);
        const list = whatsappModel.messageList(number);
        models.push(list);
    } else if(textUser.includes("bye") || textUser.includes("good bye")){
        const model = whatsappModel.messageText("Goodbye! Have a great day!", number);
        models.push(model);
    } else if(textUser.includes("thank you") || textUser.includes("thanks")){
        const model = whatsappModel.messageText("Thank you for chatting with us!", number);
        models.push(model);
    } else {
        const model = whatsappModel.messageText("I’m here if you need me!", number);
        models.push(model);
    }

    const promises = [];
    models.forEach(model => {
        promises.push(whatsappService(model));
    });

    await Promise.all(promises);

}

module.exports = {
    process
}