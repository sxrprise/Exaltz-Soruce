module.exports = {
    name : 'typing',
    description: 'Gives you the typing status without actually typing.',
    execute(msg) {
        msg.channel.startTyping()
        msg.react("✅")
           
    }
}