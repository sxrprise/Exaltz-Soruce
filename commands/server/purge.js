module.exports = {
    name : 'purge',
    description: 'purge specified amount of messages',
    execute(message, content, client) {

       if (!content) return;

       if (isNaN(content)) return;

       message.channel.fetchMessages({limit: parseInt(content) + 1}).then(message => {
          let array = message.array();
          array = array.filter(m => m.author.id === client.user.id);
          array.length = content + 1;
          array.map(m => m.delete().catch(console.error));

       });

    }
}