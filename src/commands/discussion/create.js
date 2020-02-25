const { Discussion } = require('./../../services')
const { Command } = require('./../../bot')
// const { MessageEmbed } = require('discord.js')

module.exports = class extends Command {
  constructor (client) {
    super(client, {
      name: 'create-channel',
      aliases: ['cc'],
      group: 'discussion',
      memberName: 'discussion',
      guildOnly: true,
      description: '',
      examples: ['ex/create-channel Meatbag\'s Channel'],
      clientPermissions: ['MANAGE_CHANNELS'],
      args: [
        {
          key: 'title',
          prompt: client.locale.get('PROMPT_DISCUSSION_CREATE'),
          type: 'string',
          min: 3,
          max: 20
        }
      ]
    })
  }

  async run (message, { title }) {
    const { guild } = message
    const userId = message.author.id

    const response = await Discussion.create(guild, { userId, title })
    return message
  }
}
