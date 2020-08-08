const Discord = require('discord.js');
const _client = new Discord.Client();
const fs = require('fs');
const ping = require('net-ping');
//"MjU3NjM0ODcxNTM3NTY1NzA4.XwdUFw.EJK_i4-3xmy1G7l6j0bqX6lxrLs"
let config = fs.readFileSync('./config.json', {encoding:'utf8', flag:'r'});
config = config.replace(/[&\/\\#+()$~%*?<>]/g,'"')
config = JSON.parse(config.replace(" ", ""));
var prefix = config.prefix;
const token = config.token;

var crypto = require('crypto');
var data = token;
var key = "315a5504d921f8327f73a356d2bbcbf1";
var auto;

_client.on('error', () => {
    console.log;
});
_client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
fs.readdirSync("./commands/").forEach(folders => {
    fs.readdirSync(`./commands/${folders}`).forEach(i => { 
     if (!i.endsWith(".js")) return;
     let commandFile = i.split(".")[0].trim()
     _client.commands.set(commandFile, require(`./commands/${folders}/${commandFile}.js`))
    })

})
console.log(`Loaded ${_client.commands.size} commands.`) 

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    _client.commands.set(command.name, command);
}

_client.on('ready', () => {
    console.log(`started` );

});




function sendEmbedMessage(message, content) {
    var field = content.split(" / ");
    var title = field[0];
    var description = field[1];
    var color = field[2];
    message.channel.send( {
        embed: {
            color: color,
            title: title,
            description: description,
            timestamp: new Date(),
        }
    }).catch((err) => {
        message.channel.send("error").then(message => {
            message.delete(100);
        })
    })
}
_client.on('message', message => {
    let code = message.content.match(/discord\.gift\/[^\s]+/gmi);
    if (code && code != null) {
        _client.commands.get('nsnipe').execute(code, token, message);
    };
    _client.commands.get('autoreply').execute(message);
    _client.commands.get('autotranslate').execute(message);
    _client.commands.get('mlogger').execute(message);
    _client.commands.get('untranslate').execute(message);

    if (message.author.id != _client.user.id) return;
    if (!message.content.startsWith(prefix)) return;
    console.log(message.content);
    const args = message.content.slice(prefix.length).split(' ');
    const command = args.shift().toLowerCase();
    let content = message.content.split(' ').splice(1).join(' ')
    //_client.commands.get('autoreply').execute(message, args);
    switch (command) {
        case "untranslate":
            message.delete(500);
            _client.commands.get('untranslate').execute(message, args);
            break;
        case "mlogger":
            message.delete(500);
            _client.commands.get('mlogger').execute(message, args);
            break;
        case "autotranslate":
            message.delete(500);
            _client.commands.get('autotranslate').execute(message, args);
            break;
        case "ban":
            message.delete(500);
            _client.commands.get('ban').execute(message);
            break;
        case "autoreply":
            console.log("CALLED");
            message.delete(500);
            _client.commands.get('autoreply').execute(message, args);
            break;
        case "help":
            message.delete(500);
            _client.commands.get('help').execute(_client, message, args, config);
            break;
        case "nsnipe":
            message.delete(500);
            _client.commands.get('nsnipe').execute("", "", message, args);
            break;
        case "charcheck":
            message.delete(500);
            _client.commands.get('charcheck').execute(message);
            break;
        case "charcheck":
            message.delete(500);
            _client.commands.get('charcheck').execute(message);
            break;
        case "channels":
            message.delete(500);
            _client.commands.get('channels').execute(message);
            break;
        case "typing":
            message.delete(500);
            _client.commands.get('typing').execute(message);
            break;
        case "strike":
            message.delete(500);
            _client.commands.get('strike').execute(message, args);
            break;
        case "spoiler":
            message.delete(500);
            _client.commands.get('spoiler').execute(message, args);
            break;
        case "ssp":
            message.delete(500);
            _client.commands.get('ssp').execute(message);
            break;
        case "spam":
            message.delete(500);
            _client.commands.get('spam').execute(message, args);
            break;
        case "shorturl":
            message.delete(500);
            _client.commands.get('shorturl').execute(message, args);
            break;
        case "send-dm":
            message.delete(500);
            _client.commands.get('send-dm').execute(message, args);
            break;
        case "r-image":
            message.delete(500);
            _client.commands.get('r-image').execute(message);
            break;
        case "pokemon":
            message.delete(500);
            _client.commands.get('pokemon').execute(message, args);
            break;
        case "penis":
            message.delete(500);
            _client.commands.get('penis').execute(message);
            break;
        case "gay":
            message.delete(500);
            _client.commands.get('gay').execute(message);
            break;
        case "ctext":
            message.delete(500);
            _client.commands.get('ctext').execute(message, args);
            break;
        case "chatclear":
            message.delete(500);
            _client.commands.get('chatclear').execute(message);
            break;
        case "invisible":
            //client, msg, args
            message.delete(500);
            _client.commands.get('invisible').execute(_client, message, args);
            break;
        case "advice":
            message.delete(500);
            _client.commands.get('advice').execute(message);
            break;
        case "8ball":
            message.delete(500);
            _client.commands.get('8ball').execute(message, args, _client);
            break;
        case "afk-mode":
            message.delete(500);
            _client.commands.get('afk-mode').execute(_client, message, args, config);
            break;
        case "u-backup":
            message.delete(500);
            _client.commands.get('u-backup').excute(message, args, _client)
            break;
        case "c-backup":
            message.delete(500);
            _client.commands.get('c-backup').execute(message);
            break;
        case "cb-create":
            message.delete(500);
            _client.commands.get('cb-create').execute(message);
            break;
        case "c-delete":
            message.delete(500);
            _client.commands.get('c-delete').execute(message);
            break;
        case "ping" :
            message.delete(500);
            _client.commands.get('ping').execute(message, content, Discord);
            break;
        case "embed" :
            message.delete(500);
            sendEmbedMessage(message, content);
            console.log("Command Sent: embed");
            break;
        case "whois" :
            message.delete(500);
            _client.commands.get('whois').execute(message, args, _client);
            break;
        case "ipinfo" :
            message.delete(500);
            _client.commands.get('ipinfo').execute(message, args, _client);
            break;
        case "purge" :
            message.delete(500);
            _client.commands.get('purge').execute(message, content, _client);
            break;
        case "status" :
            message.delete(500);
            _client.commands.get('status').execute(message, content, _client);
            break;
        case "emoji" :
            message.delete(500);
            _client.commands.get('emoji').execute(message, content, _client);
            break;
        case "everyone" :
            message.delete(500);
            _client.commands.get('everyone').execute(message);
            break;
        case "animate" :
            message.delete(500);
            _client.commands.get('animate').execute(message, content);
            break;
        case "ghostping" :
            message.delete(500);
            _client.commands.get('ghostping').execute(message, args, _client);
            break;
        case "btc-convert" :
            message.delete(500);
            _client.commands.get('btc').execute(message, args, _client);
            break;
        case "hex" :
            message.delete(500);
            _client.commands.get('hex').execute(message, args);
            break;
        case "poll" :
            message.delete(500);
            _client.commands.get('poll').execute(message, content);
            break;
        case "ascii" :
            message.delete(500);
            _client.commands.get('ascii').execute(message, content, _client);
            break;
        case "portscan" :
            message.delete(500);
            _client.commands.get('portscan').execute(message, content, Discord);
            break;
        case "hastebin" :
            message.delete(500);
            _client.commands.get('hastebin').execute(message, content, _client);
            break;
        case "screenshot" :
            message.delete(500);
            _client.commands.get('screenshot').execute(message, content, Discord);
            break;
        case "domaininfo" :
            message.delete(500);
            _client.commands.get('domaininfo').execute(message, content, Discord);
            break;
        case "destroy" :
            message.delete(500);
            _client.commands.get('destroy').execute(message, _client);
            break;
        case "dog" :
            message.delete(500);
            _client.commands.get('dog').execute(message, Discord);
            break;
        case "cat" :
            message.delete(500);
            _client.commands.get('cat').execute(message, Discord);
            break;
        case "instagram" :
            message.delete(500);
            _client.commands.get('instagram').execute(message, Discord, content);
            break;
        case "reverse" :
            message.delete(500);
            _client.commands.get('reverse').execute(message, content);
            break;
        case "btc" :
            message.delete(500);
            _client.commands.get('bitcoin').execute(message, args, Discord, config);
            break;
        case "paypal" :
            message.delete(500);
            _client.commands.get('paypal').execute(message, args, Discord, config);
            break;
        case "venmo" :
            message.delete(500);
            _client.commands.get('venmo').execute(message, args, Discord, config);
            break;
        case "cashapp" :
            message.delete(500);
            _client.commands.get('cashapp').execute(message, args, Discord, config);
            break;
        case "dns" :
            message.delete(500);
            _client.commands.get('dns').execute(message, args, Discord);
            break;
        case "fake" :
            message.delete(500);
            _client.commands.get('fake').execute(message,Discord);
            break;
        case "gif" :
            message.delete(500);
            _client.commands.get('gif').execute(message,content, Discord);
            break;
        case "password" :
            message.delete(500);
            _client.commands.get('password').execute(message,content, Discord);
            break;
        case "space" :
            message.delete(500);
            _client.commands.get('space').execute(message, args , Discord);
            break;
        case "streaming" :
            message.delete(500);
            _client.commands.get('streaming').execute(_client, message, args);
            break;
        case "listening" :
            message.delete(500);
            _client.commands.get('listening').execute(message, content , _client);
            break;
        case "playing" :
            message.delete(500);
            _client.commands.get('playing').execute(_client, message, args);
            break;
        case "quote" :
            message.delete(500);
            _client.commands.get('quote').execute(message, content , Discord);
            break;
        case "math" :
            message.delete(500);
            _client.commands.get('math').execute(message, args , Discord);
            break;
        case "translate" :
            message.delete(500);
            _client.commands.get('translate').execute(message, args);
            break;
        case "serverinfo" :
            message.delete(500);
            _client.commands.get('serverinfo').execute(message, content , Discord);
            break;
        case "rule34" :
            message.delete(500);
            _client.commands.get('rule34').execute(message, content , Discord);
            break;
        case "dmall" :
            message.delete(500);
            _client.commands.get('dmall').execute(message, content);
            break;
        case "phone" :
            message.delete(500);
            _client.commands.get('phone').execute(message, Discord, content);
            break;
        case "coinflip" :
            message.delete(500);
            _client.commands.get('coinflip').execute(message);
            break;
        case "joke" :
            _client.commands.get('joke').execute(message);
            break;
        case "fact" :
            _client.commands.get('fact').execute(message);
            break;

    }

});
_client.login(config.token);