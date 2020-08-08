const { RichEmbed } = require('discord.js')
module.exports = {
    name : 'penis',
    description: 'Returns mentioned users penis size.',
    execute(message, args, discord) {
        let user = msg.mentions.users.first()
        if(!user) user = msg.author
        let replies = [
            "8=D",
            "8==D",
            "8===D",
            "8====D",
            "8=====D",
            "8======D",
            "8========D",
            "8=========D",
            "8==========D",
             ]
         
             let random = Math.floor(Math.random() * replies.length)
         
             let embed = new RichEmbed()
             .setTitle(`penis machine`)
             .setDescription(`${user.tag} penis\n${replies[random]}`)
             .setColor("RANDOM")
         
             msg.channel.send(embed)
    }
}