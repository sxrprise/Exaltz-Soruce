var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function httpGet(url){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false );
    xmlHttp.send(null);
    return xmlHttp.responseText;
}
module.exports = {
    name: 'phone',
    description: 'phone',
    execute(message, discord, content) {
        message.edit("Searching....").then(msg => {
            var phone = content;
            var api_url = "https://api.c99.nl/phonelookup?key=ZIIL1-Y88DX-HLD89-DVCYB&number=" + phone + "&json";
            var data = JSON.parse(httpGet(api_url));
            if (data.success == true) {
                if (data.details.valid == true) {
                    var number = data.details.number;
                    if (!number) number ="Unknown";
                    var country = data.details.country_name;
                    if (!country) country = "Unknown";
                    var region = data.details.region;
                    if (!region) region = "Unknown";

                    var city = data.details.city;
                    if (!city) city = "Unknown";

                    var carrier = data.details.carrier;
                    if (!carrier) carrier = "Unknown";
                    var provider = data.details.provider;
                    if (!provider) provider = "Unknown";

                    let embed = new discord.RichEmbed()
                        .setTitle("Phone Number Information")
                        .addField("Number", number, true)
                        .addField("Country", country, true)
                        .addField("Region", region, true)
                        .addField("City", city, true)
                        .addField("Carrier", carrier, true)
                        .addField("Provider", provider, true);
                    message.channel.send({embed});
                }
                else {
                    msg.edit("Invalid phone number").then(msg => {
                        msg.delete(5000);
                    });
                }
            }
            else {
                msg.edit("Error occured").then(mes => {
                    mes.delete(5000);
                });
            }
        });


    }
}