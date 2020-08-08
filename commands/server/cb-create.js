const fs = require("fs");
module.exports = {
    name: 'cb-create',
    description: 'creates discord server from copied channels',
    execute(msg, args) {
        if(!msg.guild.me.hasPermission("MANAGE_CHANNELS")) return msg.reply('you do not have the manage_channels permissions.')
        fs.readFile("./backup/channels.txt", { encoding: "utf8" }, async function(err, data) {
    
            if(err) return msg.channel.send('Could not find a backup file!')
            let array = data.split("\n")
    
            for(let i = 0; i < array.length; i++) {
    
                if(array[i].split(" ").length > 1) {
                    await msg.guild.createChannel(array[i], { type:"voice"})
                } else if(array[i].split(" ").length <= 1) {
                    await msg.guild.createChannel(array[i], { type:"text"})
                }
     
            }
    
            msg.channel.send('Done!')
            
        })
    }


}