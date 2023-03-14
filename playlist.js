const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("playlist")
        .setDescription("Toca a minha playlist ^^"),

    async execute(interaction) {
        await interaction.reply("https://open.spotify.com/playlist/4OMmjZJIRi0JGxFqloqQhq?si=97ad7adaf70c4f2a")
    }    
}    