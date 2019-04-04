// パッケージの読み込み
const Discord = require("discord.js");
const settings = require("./settings.json")
const fs = require("fs");

//initalise are client
const client = new Discord.Client();
client.commands = new Discord.Collection();

//import client setting (data)
const prefix = settings.prefix;
const token = settings.token;
const owner = settings.owner;


client.on("ready", async () => {
    console.log("Botを起動しました。");
});


client.on("message", message => {
    if (!message.guild || message.author.bot) return;
    if (!command.startsWith(prefix)) return;

    const name = message.content.slice(prefix).split(" ")[0];

    const command = commands[name];
    if (command) {
        command.run(client, message);
    }
});


client.login(token);