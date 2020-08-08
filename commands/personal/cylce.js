function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
module.exports = {
    name : 'cycle',
    description: 'cycles between playing, streaming, and watching status',
    execute(client, args) {
        var index = 0;
        var interval = setInterval(() => {

            if (args && args == 'off') {
                clearInterval(interval);
                return;
            }
            index = index + 1;
            if (index > 4) {
                index = 0;
            }
            console.log(index);
            client.user.setPresence( {
                game: {
                    name: 'exonerate',
                    type: index,
                    url: "https://exonerate.cc",
                    state: 'exonerate',
                    emoji: [696821008149119016]
                }
            });
        }, 10000); // Runs this every 10 seconds.*/

    }
}