var random_joke = require('give-me-a-joke');
module.exports = {
    name : 'joke',
    description: 'random joke',
    execute(message) {

        random_joke.getRandomDadJoke(function(joke) {
           message.edit(joke);
        });

    }
}