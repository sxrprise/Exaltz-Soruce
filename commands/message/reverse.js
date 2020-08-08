var reverse = require('reverse-text');
module.exports = {
    name: 'reverse',
    description: 'reverses provided text (usage: reverse [text])',
    execute(message, args) {
        var text = args;
        if (!text) return;
        message.channel.send(reverse(text));
    }

}