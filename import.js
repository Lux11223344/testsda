module.exports = () => {
    fs.readdir("./commands/", (err, files) => {
        if (err) {
            console.log(err);
        }

        let cmdFiles = files.filter(f => f.split(".").pop() === "js");


        if (cmdFiles.length === 0) {
            console.log("No files found");
            return;
        }

        cmdFiles.forEach((f, i) => {
            let props = require(`./cmds/${f}`);
            console.log(`${i + 1}: ${f} 読み込み完了`);
            client.commands.set(props.help.name, props);
        })
    })
}