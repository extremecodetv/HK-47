(async () => {
  const path = require('path')
  const Config = require('./config')
  const { Client } = require('./bot')

  const client = new Client({
    commandPrefix: Config.Command.Prefix,
    owner: Config.Owners,
    invite: false,
    disableEveryone: true,
    disabledEvents: ['TYPING_START']
  })

  client.registry
    .registerDefaultTypes()
    .registerGroups(require('./groups'))
    .registerDefaultCommands({
      help: false,
      ping: false,
      prefix: false,
      commandState: false,
      unknownCommand: false,
      eval: false
    })
    .registerCommandsIn(path.join(__dirname, 'commands'))

  client.on('disconnect', event => {
    client.logger.error(`[DISCONNECT] Disconnected with code ${event.code}.`)
    process.exit(0)
  })

  client.on('error', error => client.logger.error(error))

  client.on('warn', warn => client.logger.warn(warn))

  client.on('commandError', (command, error) => client.logger.error(`[COMMAND:${command.name}]\n${error.stack}`))

  process.on('uncaughtException', error => {
    client.logger.error(`[UncaughtException]\n${error.stack}`)
    process.exit(1)
  })

  client.login(Config.Token).then(() => client.logger.info('Connected'))
})()
