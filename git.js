const { SlashCommandBuilder, EmbedBuilder } = require("discord.js")


const exampleEmbed = new EmbedBuilder()
	.setColor(0xFFCCE0)
	.setTitle('Comandos do Studos')
	.setDescription('Esse bot disponibiliza comandos para auxiliar nos estudos')
	.setThumbnail('https://lh3.googleusercontent.com/F1M74FrVSM3QUauTLXZJCAvDLz_ru-SUtzwtMrjhdjHsDHC6AiuyWw1-OLegqPUk0XZKcIlocJHSgo_BK9duWQDAs3C-FLlpNxlkl_-T')
	.addFields(
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Remindme', value: 'Te manda um lembrete',  inline: true },
		{ name: 'Pomodoro-mode', value: 'Faz um ou mais ciclos de pomodoro', inline: true },
		{ name: 'to-do', value: 'Cria uma lista de tarefas a se fazer', inline: true },
	)

module.exports = {
    data: new SlashCommandBuilder()
        .setName("help")
        .setDescription("Lista as funções disponíveis"),

    async execute(interaction) {
        await interaction.reply({ embeds: [exampleEmbed] })
    }    
}    