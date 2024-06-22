const {Client, Intents, IntentsBitField} = require('discord.js') //import discord.js
require('dotenv').config() //import values from .env
const handleInteraction = require('./commands'); //import command handler

const client = new Client( //
    {
        intents: [ //documentation -> https://discord.com/developers/docs/topics/gateway#list-of-intents
            IntentsBitField.Flags.Guilds, //get Guild
            IntentsBitField.Flags.GuildMembers, //get members
            IntentsBitField.Flags.GuildMessages, //get messages on guild
            IntentsBitField.Flags.MessageContent, //get content of messages on guild
            IntentsBitField.Flags.GuildVoiceStates, //get voice states of voice channels
            IntentsBitField.Flags.GuildMessageReactions //get reactions on messages
        ]
    }
)

console.log('Bot is starting...') //log that the bot is starting

client.login(process.env.DISCORD_BOT_TOKEN); //bot login 

client.on('ready', () => { //when the bot is ready event
    console.log(`Logged in as ${client.user.tag}!`) //log that the bot is ready
});

client.on('interactionCreate', handleInteraction); //handle interaction

//============================================================================================================

//DEBUGGING COMMANDS

//check if messageIntents are working.
// client.on('messageCreate', message => { 
//     if (message.content === 'ping') {
//         message.reply('pong')
//     }
// })

