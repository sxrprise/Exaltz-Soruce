
module.exports = {
    name : 'spam',
    description: 'spam message x amount of times. spam <message> <count>',
    execute(msg, args) {
        let amount = args[0];
        let message = args.join(" ")
        if(amount.length === null || message === null)
        if(!amount || message)
            for(let i = 0; i < parseInt(amount); i++) {
                setTimeout( async function(){ await msg.channel.send(message.slice(amount.length)) }, 3000);
            }
            msg.channel.send('Done')
    }
}