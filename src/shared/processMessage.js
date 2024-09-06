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
    } else if(textUser.includes("buy")){
        const model = whatsappModel.messageBuy(number);
        models.push(model);
    } else if(textUser.includes("meals")){
        const model = whatsappModel.messageText("Go here and enjoy your meals https://www.federalistpig.com", number);
        models.push(model);
    } else if(textUser.includes("agency")){
        const model = whatsappModel.messageLocation(number);
        models.push(model);
    } else if(textUser.includes("contact")){
        const model = whatsappModel.messageText("Call with us:*\n+97142225474 ", number);
        models.push(model);
    } else if(textUser.includes("laptop")){
        const model = whatsappModel.messageImage(number);
        models.push(model);
    } else if(textUser.includes("catalog")){
        const model = whatsappModel.messageDocument(number);
        models.push(model);
    } else if(textUser.includes("computer")){
        const model = whatsappModel.messageVideo(number);
        models.push(model);
    } else if(textUser.includes("headphone")){
        const model = whatsappModel.messageAudio(number);
        models.push(model);
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
        //whatsappService(model).then(response => console.log('Success:', response)).catch(err => console.error('Request failed:', err));
    });

    await Promise.all(promises);

}

module.exports = {
    process
}