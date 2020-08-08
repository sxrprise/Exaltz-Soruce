var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function httpGet(url){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false );
    xmlHttp.send(null);
    return xmlHttp.responseText;
}
module.exports = {
    name : 'screenshot',
    description: 'takes a screenshot of any website (usage: screenshot [https://example.com]',
    execute(message, args, discord) {
        var url = args;
        var api_url = "https://api.c99.nl/createscreenshot?key=ZIIL1-Y88DX-HLD89-DVCYB&url=" + url + "&json"
        var data = JSON.parse(httpGet(api_url));

        var succes = data.success;
        if (succes == true) {
            var embed = new discord.RichEmbed()
                .setImage(data.url);
            message.channel.send({embed});
        }
        else {
            message.channel.send(data.error).then(message => {
                message.delete(500);
            });
        }

    }
}