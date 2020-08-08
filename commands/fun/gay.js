const { RichEmbed } = require('discord.js')

function ran(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

module.exports = {
    name : 'gay',
    description: 'Tells you how gay you are. Mentioning a user tells how gay the specified user is.',
    execute(msg) {
        let member = msg.mentions.users.first();

        if (!member) member = msg.author
    
        msg.channel.send(
            new RichEmbed()
            .setColor('RANDOM')
            .setDescription(`${member} is ${ran(0, 100)}% gay!`)
        );
    }
}

