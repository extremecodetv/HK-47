const winston = require('winston')
const { Client } = require('discord.js-commando')
const { English } = require('./language')

module.exports = class extends Client {
  constructor (options) {
    super(options)

    this.logger = winston.createLogger({
      transports: [new winston.transports.Console()],
      format: winston.format.combine(
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        winston.format.printf(log => `[${log.timestamp}] [${log.level.toUpperCase()}]: ${log.message}`)
      )
    })

    this.locale = new English()
  }
}
