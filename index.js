const { Client, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');


const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});


client.on("messageCreate", (message) =>{
	if(message.content == "hi"){
		message.reply("hello saya winz :)")
	}
})

client.on("ready", () => {
	console.log(`Ready! Logged in as ${client.user.tag}`);
})


client.login(token);