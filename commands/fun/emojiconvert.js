const emoji = require('discord-emoji-convert');

module.exports = {
    name: 'emoji',
    description: 'converts text to emojis',
    execute(message, args, client) {

        var text = args;
        message.channel.send(emoji.convert(text));


    }
}