const Discord = require("discord.js")


module.exports = bot => {
    console.log(`${bot.user.username} jest online`)
    bot.user.setActivity("TERRARIUM", {type: "STREAMING", url:"https://www.twitch.tv/wolzi_"});
}
