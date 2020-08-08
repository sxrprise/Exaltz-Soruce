const alexa = require('alexa-bot-api');//package made by unque/dev and ctk warrior
const { MessageEmbedFooter } = require('discord.js');
var chatbot = new alexa("aw2plm")//free access key for ctk channel

let channel;
let author;
var ison = false;

module.exports = {
    name : 'autoreply',
    description: 'Realistic replies. autoreply <on/off>',
    execute(message, args) {
        if(!message) return;
        if (message.attachments.size > 0) return;
        if(message.author.id === author && message.content.includes("autoreply") != true) return;
        if(channel && channel != message.channel.id) return;

        if (ison && message && channel === message.channel.id && !message.content.includes("autoreply")){ 
            let content = message.content;
            message.channel.startTyping()
            chatbot.getReply(content).then(r => message.channel.send(r))
            message.channel.stopTyping()
        } else if (args && message.content.includes("autoreply")) {
            if (args[0] === "on") {
                channel = message.channel.id 
                author = message.author.id
                ison = true;
                message.channel.send("Auto-reply is online");
            } else {
                ison = false;
                message.channel.send("Auto-reply is offline");
            }
        } 
    }
}
