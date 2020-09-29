const Discord = require ('discord.js');
const bot = new Discord.Client();
const token ='NzYwNTkxNTQ3MjkxOTI2NTc4.X3OSEw.Bu3rpnH69CiWMD-KPGXIA1wchAM';

bot.on('ready', () =>{
console.log('Your bot is now online.');
bot.user.setActivity(`over members ${bot.guilds.get("756836010611965973").memberCount}`, { type: "WATCHING"})
.then (presence => console.log(`Activity set to ${presence.activities[0].name}`))
.catch (console.error);
bot.user.setStatus('dnd')
})

bot.on("message", message => {
    if (message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLocaleLowerCase();

})

bot.login(token);