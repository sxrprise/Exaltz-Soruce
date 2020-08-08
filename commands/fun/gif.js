


var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function httpGet(url){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false );
    xmlHttp.send(null);
    return xmlHttp.responseText;
}
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
module.exports = {
    name : 'gif',
    description: 'generates a gif based on a key word (usage: gif [key word]',
    execute(message, args, discord) {
        var word = args;
        var api_url = "https://api.c99.nl/gif?key=ZIIL1-Y88DX-HLD89-DVCYB&keyword=" + word + "&json";
        var data = JSON.parse(httpGet(api_url));
        var succes = data.success;
        if (succes == true) {
            var random = getRandomInt(data.images.length);
            var random_image = data.images[random];
            var embed = new discord.RichEmbed()
                .setImage(random_image);
            message.channel.send({embed});
        }
        else {
            message.channel.send(data.error).then(message => {
                message.delete(500);
            });
        }

    }
}