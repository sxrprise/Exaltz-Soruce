var fs = require('fs');
module.exports = {
    name: 'c-backup',
    description: 'backs up all discord channels',
    execute(msg) {
        msg.channel.send('Hold up, downloading file of ' + msg.guild.channels.size + ' channels.')
        let array = []
        msg.guild.channels.forEach(c => array.push(c.name))
        
        fs.writeFileSync(`./backup/channels.txt`, array.join("\n"))
    
        msg.channel.send('Done.')
    }


}