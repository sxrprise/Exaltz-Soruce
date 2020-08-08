let markdowns = ["brainfuck", "css", "yaml", "fix"]
module.exports = {
    name : 'ctext',
    description: 'Sends your message in a random color.',
    execute(msg, args) {
        if(!args.join(" ").length) return msg.reply('You need to type some text!')
        msg.channel.send(args.join(" "), { code: markdowns[Math.floor(Math.random() * markdowns.length)]})
    }
}