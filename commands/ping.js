module.exports.name = "ping";

module.exports.run = (client, message) => {
    message.channel.send(`${Math.round(client.ping)} ms`);
};