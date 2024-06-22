// commands/ping.js
module.exports = {
    name: 'ping',
    description: 'Replies with Pong!',
    execute: async (interaction) => {
      await interaction.reply('Pong!');
    }
  };
  