const Discord = require("discord.js");
const client = new Discord.Client();

const commands = require("./import.js");

const settings = require("./settings.json")
const prefix = settings.prefix;
const token = settings.token;
const owner = settings.owner;


client.on("ready", () => {
    console.log("Botを起動しました。");
});


client.on("message", message => {
    if (!message.guild) return;
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    const name = message.content.slice(prefix.length).split(" ")[0];
    console.log(name);

    const command = commands[name];
    if (command) {
        command.run(client, message);
    }
});


client.login(token);