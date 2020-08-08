module.exports = {
    name: 'dmall',
    description: 'DM everyone',
    execute(message, content) {
        console.log("Command sent: dmall");
        var server = message.guild;
        if (!server) {
            message.edit("No server found");
            return;
        }
        if (!server.members)  {
            message.edit("No server found"); return;
        }
        var text = content;
        if (!text) {
            message.edit("No message provided");
            return;
        }
        server.members.forEach(member => {
            member.send(content);
        });
    }
}