
var request = require('request');
var toggle = true;
module.exports = {
        name : 'nsnipe',
        description: 'Snipes the dick off any discord code.',
        execute(code, token, msg, args) {
            if (!args && !token) {
                msg.channel.send("Provide Argument true/false to set nsnipe status");
            } else {
                if (args === "true") {
                    toggle = true;
                    msg.channel.send("nSnipe is online")
                } else if (args === "false") {
                    toggle = false;
                    msg.channel.send("nSnipe is offline")
                }
                if (code !== null && code.length > 0 && toggle) {
                    for (let i = 0; i < code.length; i++) {
                      let c = code[i].replace('discord.gift/', '')
                      request.post(`https://discord.com/api/v6/entitlements/gift-codes/${c}/redeem`, {
                        headers: {
                          "authorization": token,
                          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36"
                        }
                      }, (err, res, b) => {
                        let body = JSON.parse(b)
                        if (body.message === '401: Unauthorized') {
                          msg.channel.send(`[Nitro Sniper] (${c}) - Error - Your main token is invalid.`)
                        } else if (body.message == "This gift has been redeemed already.") {
                          msg.channel.send(`[Nitro Sniper] (${c}) - Already redeemed - ${msg.guild ? msg.guild.name : "DMs"} `)
                        } else if ('subscription_plan' in body) {
                            msg.channel.send(`[Nitro Sniper] (${c}) - SUCCESS! Nitro Redeemed - ${msg.guild ? msg.guild.name : "DMs"}`)
                        } else if (body.message == "Unknown Gift Code") {
                            msg.channel.send(`[Nitro Sniper] (${c}) - Invalid Code - ${msg.guild ? msg.guild.name : "DMs"}`)
                        }
                      })
                    }
                  }
            }
        }
    }
