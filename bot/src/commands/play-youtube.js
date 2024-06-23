const { joinVoiceChannel, createAudioPlayer, createAudioResource, AudioPlayerStatus, VoiceConnectionStatus } = require('@discordjs/voice');
const ytdl = require('ytdl-core');

module.exports = {
  name: 'play-youtube',
  description: 'Plays a YouTube video in voice channel',
  async execute(interaction) {
    const url = interaction.options.getString('url');

    if (!url) {
      return interaction.reply('You need to provide a YouTube URL!');
    }

    if (!ytdl.validateURL(url)) {
      return interaction.reply('Invalid YouTube URL!');
    }

    const voiceChannel = interaction.member.voice.channel;
    if (!voiceChannel) {
      return interaction.reply('You need to be in a voice channel to play music!');
    }

    const connection = joinVoiceChannel({
      channelId: voiceChannel.id,
      guildId: interaction.guild.id,
      adapterCreator: interaction.guild.voiceAdapterCreator,
    });

    const stream = ytdl(url, { filter: 'audioonly' });
    const resource = createAudioResource(stream);
    const player = createAudioPlayer();

    player.play(resource);
    connection.subscribe(player);

    player.on(AudioPlayerStatus.Playing, () => {
      interaction.reply(`Now playing: ${url}`);
    });

    player.on(AudioPlayerStatus.Idle, () => {
      connection.destroy();
    });

    player.on('error', error => {
      console.error(error);
      interaction.reply('An error occurred while trying to play the video.');
    });
  },
};
