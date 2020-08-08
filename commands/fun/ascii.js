let figlet = require('figlet');
module.exports = {
    name : 'ascii',
    description: 'converts text to ascii',
    execute(message, args, client) {
        figlet(args, function(err, data) {
   		 if (err) {
        		console.log('Something went wrong...');
        		console.dir(err);
        		return;
    		}
    		message.channel.send("```" + data + "```");
	});
    }
}