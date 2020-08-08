module.exports = {
    name : 'charcheck',
    description: 'checks if user has hidden characters in their name. example:!charcheck @user',
    execute(msg) {
        let user = msg.mentions.users.first()
        if(!user) return msg.reply('i need a user to check on!')

        if(/[\x00-\x2f\x3a-\x40]/.test(user.username)) {
            return msg.reply('They had hidden / special characters in their name!')
        }

        msg.reply('that user did not have hidden / special characters in their name.')
    }
}