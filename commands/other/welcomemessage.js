function sendEmbedMessage(message, client, discord) {
    var ping = client.commands.get('ping').description;
    var whois = client.commands.get('whois').description;

    const fs = require('fs');

    const commandFiles = fs.readdirSync('').filter(file => file.endsWith('.js'));

    let richEmbed = new discord.RichEmbed()
        .setTitle("Command List")
    for (const file of commandFiles) {
        const command = require(`${file}`);
        richEmbed.addField(command.name, command.description);
      // message.channel.send(`**${command.name}** \n **Description:** ${command.description}`);
    }
    message.channel.send({richEmbed});

}
module.exports = {
    name : 'help',
    description: 'lists all commands',
    execute(message, client, discord) {

        sendEmbedMessage(message, client, discord);
        console.log("Command Sent: help");


    }
}