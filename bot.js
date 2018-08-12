const Discord = require("discord.js");

const client = new Discord.Client();

client.on("ready", function() {
    console.log("Ready");
});

client.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == "hello")
        message.channel.sendMessage("Hi, there!");
    }
});

client.login(process.env.BOT_TOKEN);
