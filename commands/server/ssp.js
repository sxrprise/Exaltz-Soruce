
const { RichEmbed } = require('discord.js')
module.exports = {
    name : 'ssp',
    description: 'steals server picture',
    execute(msg) {
        if(msg.guild.iconURL === null) return msg.reply('This guild does not have an icon.')
        let embed = new RichEmbed()
        .setImage(msg.guild.iconURL)
        .addField('URL', msg.guild.iconURL)
        msg.channel.send(embed)
    }
}