const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { description } = require('./commands/hello');
const { ApplicationCommandOptionType } = require('discord.js');
require('dotenv').config({path:'/bot/.env'});

//Get token, clientId, and Guild ID from .env
const token = ""
const clientId = "";
const guildId = "";

console.log(process.env)

// List of Commands
const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!'
  },
  {
    name: 'hello',
    description: 'Replies with Hello!'
  },
  {
    name: 'play-youtube',
    description: 'Plays a YouTube video audio in voice channel',
    options: [
      {
        name: 'url',
        description: 'The URL of the YouTube video',
        type: ApplicationCommandOptionType.String,
        required: true
      }
    ]
  }
];

const rest = new REST({ version: '9' }).setToken(token);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(
      Routes.applicationCommands(clientId),
      { body: commands }
    );

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();
