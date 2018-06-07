const Discord = require("discord.js");
 const client = new Discord.Client();



 var prefix = "k!";

 client.login("")

client.on('message', message => {
    if(message.content === prefix + "ping" ) { 
        message.reply("ping pong")
        console.log("ping pong");
        }
});
