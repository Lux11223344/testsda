const Discord = require("discord.js");



module.exports.run = async (client, message, args) => {

    message.channel.send("Scrim starting now!");

}


module.exports.help = {
    name: "now"
}