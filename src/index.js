const path = require('path')
const Config = require('./config')
const { Client } = require('./bot')

const runner = async () => {
  const client = new Client({
    commandPrefix: Config.Command.Prefix,
    // owner: OWNERS.split(','),
    invite: false,
    disableEveryone: true,
    disabledEvents: ['TYPING_START']
  })

  client.registry
    .registerDefaultTypes()
    .registerGroups([
      ['util', 'Utility'],
      ['discussion', 'Discussion']
    ])
    .registerDefaultCommands({
      help: false,
      ping: false,
      prefix: false,
      commandState: false,
      unknownCommand: false
    })
    .registerCommandsIn(path.join(__dirname, 'commands'))

  client.on('disconnect', event => {
    client.logger.error(`[DISCONNECT] Disconnected with code ${event.code}.`)
    process.exit(0)
  })

  client.on('error', err => client.logger.error(err))

  client.on('warn', warn => client.logger.warn(warn))

  client.on('commandError', (command, err) => client.logger.error(`[COMMAND:${command.name}]\n${err.stack}`))
}

runner()
