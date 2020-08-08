module.exports = {
    name : 'streaming',
    description: 'set streaming status',
    execute(client, msg, args) {
        if (!args[0]) return msg.reply('I need a message to set as streaming.')

        if (args.join(" ").length > 100) return msg.reply('That is too long of a message to set.')
        client.user.setActivity(args.join(" "), { type: "STREAMING"})
        msg.react("✅")
    }
}