const fs = require('fs')
const { RichEmbed, Message } = require('discord.js')
const { group } = require('console')
module.exports = {
    name : 'help',
    description: 'help!',
    execute(client, msg, args, config) {
        
    let array = ["fun", "incognito", "message", "payment", "personal", "server", "other"]
    let query = args[0]

    if(!client.commands.get(query) && !array.includes(query)) {
        let groupEmbed = new RichEmbed()

        for(let i = 0; i < array.length; i++) {
           groupEmbed.addField(array[i], `${config.prefix}help ${array[i]}`, true)
        }
        groupEmbed.setTitle("*Exonerate v2.5*")
        groupEmbed.setURL("https://exonerates.club")
        groupEmbed.setImage("")
        groupEmbed.setColor("#0212c7")
        groupEmbed.setFooter('Exonerate Development');
        groupEmbed.setTimestamp()
        msg.channel.send(groupEmbed)
        return;
    }

    query = query.toLowerCase()
    if (client.commands.get(query)) {
       
        let i = client.commands.get(query)
        let commandEmbed = new RichEmbed()
        //http://rainbowdivider.com/images/dividers/ani-bunny.gif
        .setDescription(`Name: **${i.name}**\nDesc: ${i.description}\nExample: IN FUTURE UPDATES.`)
        .setColor("RANDOM")
        msg.channel.send(commandEmbed)
    } else if(array.includes(query)) {
        
        commandh = [];
        fs.readdirSync(`./commands/${query}`).forEach(command => {
            if (!command.includes(".svg")) {
                let x = command.replace(".js", "");
                commandh.push(x);
            }
        })
        
        let commandsEmbed = new RichEmbed()
        .setTitle(`*Exonerate v2.5* : *${query}*`)
        .setURL("https://exonerates.club")
        .setDescription(commandh.map(i => '`' + client.commands.get(i).name + '`').join(" "))
        .setColor("RANDOM")

        msg.channel.send(commandsEmbed)
    

    }
    }
}
