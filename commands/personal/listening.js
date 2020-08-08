module.exports = {
    name : 'listening',
    description: 'set listening status',
    execute(message, content, client) {

        if (!content) return;
        /*
        2 - listening
        3- streaming
        4- regular status

         */
        client.user.setPresence({
            game: {
                name: null,
                type: null,
            }
        }).then(() => {
            client.user.setPresence({
                game: {
                    name: content,
                    type: 2,
                }
            });
        });
    }
}