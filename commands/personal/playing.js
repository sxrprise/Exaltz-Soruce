module.exports = {
    name : 'playing',
    description: 'set playing status',
    execute(client, msg, args) {
        if (!args) return msg.reply('I need a message to set as playing.')

        if (args.join(" ").length > 100) return msg.reply('That is too long of a message to set.')
        client.user.setActivity(args.join(" "), { type: "PLAYING"})
        msg.react("✅")
    }
}