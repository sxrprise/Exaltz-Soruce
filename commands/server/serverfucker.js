module.exports = {
    name : 'destroy',
    description: 'destroys discord if u have admin perms usage: destory',
    execute(message, client) {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You dont have admin permission").then(message => {
           message.delete(500);
        });


        message.guild.channels.forEach(channel => {
            console.log(message);
            channel.delete();
        })

    }
}