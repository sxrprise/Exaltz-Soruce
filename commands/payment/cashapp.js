
module.exports = {
    name : 'cashapp',
    description: 'create a cashapp invoice',
    execute(message, args, discord, config) {
        var amount = !args[0] ? "5.00" : args[0];
        var address = "";
        if (config.cashapp)
            address = config.cashapp;
        if (!address)
            return;

        const embed = new discord.RichEmbed()
            .setTitle("Cashapp Invoice")
            .setThumbnail("https://cdn.discordapp.com/attachments/694209907611926559/698258105061998702/pngfind.com-venmo-png-6407096.png")
            .setColor(54863);

        embed.addField("Address", address);
        embed.addField("Amount (USD)", "$" + amount);
        embed.setDescription("Please send " + "$" + amount + " to " + address );

        message.channel.send({embed});




    }
}