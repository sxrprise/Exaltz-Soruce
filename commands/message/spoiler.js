module.exports = {
    name : 'spoiler',
    description: 'turns message into spoiler',
    execute(msg, args) {
        let text = args.join(" ")
        if(text.length > 2000) return msg.channel.send('text may not exceed 2000 characters')
        
        msg.channel.send(`||${text}||`)
    }
}