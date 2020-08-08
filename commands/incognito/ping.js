const WebResolver = require('webresolver');

let resolver = new WebResolver("BHJ2C-SFJTU-6NAW6-Y0TXO");
function sendEmbedMessage(message, ip, country, isp, vpn) {

}
module.exports = {
    name : 'ping',
    description: 'pings an ip (usage: ping [ip]',
    execute(message, args, discord) {
        var ip = args;
        const embed = new discord.RichEmbed()
            .setTitle("PortScan : " + ip)
        resolver.ping(ip).then(res => {
            message.channel.send("```" + res.data + "```").then(message => {
                message.delete(2000);
        });
        });

    }
}