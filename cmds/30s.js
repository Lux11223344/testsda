const Discord = require("discord.js");


module.exports.run = async (client, message, args) => {

    message.channel.send("Next scrim in 30 seconds");

}

module.exports.help = {
    name: "30s"
}