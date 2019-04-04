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


//read command files



client.on(`ready`, async () => {
    console.log("こんにちは。準備中です。");


});




client.on("message",message => {
    if (message.channel.type === "dm") return;
    if (message.author.bot) return;

    let message_array = message.content.split(" ");
    let command = message_array[0];
    let args = message_array.slice(1);

    if(!command.startsWith(prefix)) return;

    if (client.commands.get(command.slice(prefix.length))){
        let cmd = client.commands.get(command.slice(prefix.length));
        if (cmd){
            cmd.run(client,message,args);
        }


    }


});


  client.login(token);