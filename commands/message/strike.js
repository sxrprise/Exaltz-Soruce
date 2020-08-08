
module.exports = {
    name : 'strike',
    description: 'puts a strike through your message',
    execute(msg, args) {
        let text = args.join(" ")
        if(text.length > 2000) return msg.channel.send('text may not exceed 2000 characters')
    
        msg.channel.send(`~~${text}~~`)     
    }
}