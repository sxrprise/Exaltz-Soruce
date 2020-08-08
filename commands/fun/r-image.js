const { RichEmbed } = require('discord.js')
module.exports = {
    name : 'r-image',
    description: 'random image',
    execute(msg) {
        let embed = new RichEmbed()
        .setImage(`https://i.picsum.photos/id/${Math.floor(Math.random() * 1050)}/800/300.jpg`)
        .setColor("RANDOM")
    
        msg.channel.send(embed)
    }
}