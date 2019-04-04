const Discord = require('discord.js');


module.exports.run = async (bot,message,args) => {

    message.channel.send("Next scrim in 60 seconds");

}

module.exports.help = {
    name: "60s"
};