module.exports = {
    name : 'u-backup',
    description: 'spaces out text',
    execute(message, args, client) {
        msg.channel.send('Hold up, downloading file of ' + client.users.size + ' users.')
        let array = []
        client.users.forEach(u => array.push(u.tag))
        
        fs.writeFileSync('../output/usernames.txt', array.join("\n"))
        
        msg.channel.send('Done.')        
    }
}