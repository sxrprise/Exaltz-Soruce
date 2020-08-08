//const fetchedChannel = message.guild.channels.find(r => r.name === args.join(' '));
let fs = require('fs');
module.exports = {
    name: 'c-delete',
    description: 'deletes channels. WARNING! WILL DELETE EVERYTHING!',
    execute(msg) {
        if(!msg.guild.me.hasPermission("MANAGE_CHANNELS")) return msg.reply('you do not have the manage_channels permissions.')
        fs.readFile("./backup/channels.txt", { encoding: "utf8" }, async function(err, data) {
    
            if(err) return msg.channel.send('Could not find a backup file!')
            let array = data.split("\n")
            let channels = [];

            console.log(channels);
            msg.guild.channels.forEach(channel => {
                    channel.delete();
            })
            msg.channel.send('Done!')
            
        })
    }


}