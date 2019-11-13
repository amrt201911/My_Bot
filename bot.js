const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'هاي') {
    msg.reply('هلا نورت');
  }
});






client.on('message', message => {
    if(message.author.bot) return undefined;
    if(message.channel.type == "dm") return undefined;
    if(message.content.startsWith("مرحبا")){
        message.reply('هلا والله يا قلبي ');
    }
})


































































client.login('NjQzMDUzOTI4ODIwNTA2NjI0.Xcf5NQ.6G2-7hM82D6cM4Fee3eIskZBk3g');