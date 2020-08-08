var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function httpGet(key, steamid){
    var url = "http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=" + key + "&steamids=" + steamid + "&format=JSON";
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false );
    //xmlHttp.setRequestHeader("X-Key",key);
    xmlHttp.send(null);
    return xmlHttp.responseText;
}
module.exports = {
    name: "steam",
    description: "grabs information about a 64-bit steam id",
    execute(message, args, discord) {
        var api_key = 'E7F64F5186C65B3EBD84D2A56E9E1315';
        var steamid = args[0];
        var result = JSON.parse(httpGet(api_key, steamid));
        var data = result.response.players;
        console.log(data);
        // 2770782
        var data_created = new Date(data.timecreated);
        var embed = new discord.RichEmbed()
            .setTitle(data.personaname)
            .setColor(2770782)
            .setThumbnail(data.avatarfull)
            .addField("Steam ID", data.steamid)
            .addField("Country", data.loccountrycode)
            .addField("Created At", data_created);

        message.channel.send({embed});

    }
}