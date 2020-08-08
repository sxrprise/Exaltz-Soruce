
module.exports = {
    name : 'venmo',
    description: 'create a venmo invoice',
    execute(message, args, discord, config) {
        var amount = !args[0] ? "5.00" : args[0];
        var address = "";
        if (config.venmo)
            address = config.venmo;
        if (!address)
            return;

        const embed = new discord.RichEmbed()
            .setTitle("Venmo Invoice")
            .setThumbnail("https://cdn.discordapp.com/attachments/694209907611926559/698256864068239410/6463580_thumb.png")
            .setColor(4036046);

        embed.addField("Address", address);
        embed.addField("Amount (USD)", "$" + amount);
        embed.setDescription("Please send " + "$" + amount + " to " + address );

        message.channel.send({embed});




    }
}