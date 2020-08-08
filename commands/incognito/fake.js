var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function httpGet(url){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false );
    xmlHttp.send(null);
    return xmlHttp.responseText;
}
module.exports = {
    name: 'fake',
    description: 'generates a fake person (usage: fake',
    execute(message, discord) {
        var api_url = "https://api.c99.nl/randomperson?key=ZIIL1-Y88DX-HLD89-DVCYB&gender=all&json";

        var data = JSON.parse(httpGet(api_url));

        var success = data.success;

        if (success == true) {
            var embed = new discord.RichEmbed()
                .setTitle(data.name)
                .addField('Gender', data.gender, true)
                .addField('Date of Birth', data.dob, true)
                .addField('Age', data.age, true)
                .addField('Address', data.street, true)
                .addField('City', data.city, true)
                .addField('State', data.state, true)
                .addField('Country', data.country, true)
                .addField("Zip", data.zip, true)
                .addField('Phone', data.cell, true)
                .addField('Email', data.email, true);

            message.channel.send({embed});
        }
        else {
        }

    }
}