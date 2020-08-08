let log = [];
module.exports = {
    name : 'mlog',
    description: 'Detects when a message was recently deleted',
    execute(message, args) {
        var question = args;
        var color = 12779264;
        if (!question) return;
        sendPoll(message, question, color);

    }
}