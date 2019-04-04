const fs = require("fs");

const commands = {};

fs.readdir("./commands/", (err, files) => {
    if (err) throw new Error(`コマンド読み込みでエラーが発生しました: \n${err}`);

    files.filter(file => file.endsWith(".js"));

    if (files.length === 0) return console.log("コマンドが見つかりませんでした。");


    files.forEach((file, i) => {
        if (!file.endsWith(".js")) return;
        const command = require(`./commands/${file}`);
        console.log(`${i + 1}: ${file} 読み込み完了`);
        commands[command.name] = command;
    })
})

module.exports = commands;
