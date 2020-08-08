const Discord = require('discord.js');
let messages = [];
//
//https://discordapp.com/api/webhooks/732417405279797249/Jmb_4jOa_GlBAQPOSNcO7wZnAjTFeKV8fnggkazzGZ3FxQ2OvyNLRAn0-xtGeGoCKlnx
let author;
let channel;
let whook;
let online = false;
let targetU;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function sendMessage() {
    if (!online) {
        online = true;
        while(messages != 0) {
            await sleep(2500);
            await whook.send(messages[messages.length - 1]);
            await messages.pop();
        };
    } else {
        console.log("already online");
    }
}

module.exports = {
    name: 'mlogger',
    description: 'message tracking and logging.',
    execute(msg, args) {
        if(!msg) return;
        if(msg.webhookID) return;
        if(!channel && msg.content.includes("mlogger") === false) return;
        //if(channel && channel != msg.channel.id) return;
        if (msg.content.includes("discordapp") && whook === undefined && args) {
            let hook = args[0].replace("https://discordapp.com/api/webhooks/", "").split("/");
            whook = new Discord.WebhookClient(hook[0].replace("!mlogger", ""), hook[1]);
            whook.send("mLogger successfully connected.");
            channel = msg.channel.id;
            author = msg.author.id;
            targetU = args[1];
        } else if (author && channel) {
            if (msg.author.id === author) {
                messages.push(`You -> ${msg.channel.name} -> ${msg.content}`);
                sendMessage();
            } else if(msg.author.id === targetU) {
                messages.push(`${msg.member.user.tag} -> ${msg.guild} -> ${msg.channel.name} -> ${msg.content}`);
                sendMessage();
            }
        }
    }
}