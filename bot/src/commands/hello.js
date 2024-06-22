// commands/hello.js
module.exports = {
    name: 'hello',
    description: 'Replies with Hello!',
    execute: async (interaction) => {
      await interaction.reply('Hello!');
    }
  };
  