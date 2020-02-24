const { Command } = require('./../../bot')
// const { MessageEmbed } = require('discord.js')

module.exports = class extends Command {
  constructor (client) {
    super(client, {
      name: 'create',
      aliases: ['c'],
      group: 'discussion',
      memberName: 'discussion',
      description: '',
      args: [
        {
          key: 'title',
          prompt: 'question: ',
          type: 'string',
          default: msg => msg.title
        }
      ]
    })
  }

  run (message, { title }) {
    return message
  }
}
