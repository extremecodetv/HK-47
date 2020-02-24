require('dotenv').config()

module.exports = {
  DatabaseUri: process.env.DB_URI,
  Token: process.env.TOKEN,
  GuildId: process.env.GUILD_ID,
  Command: {
    Prefix: process.env.COMMAND_PREFIX
  },
  Discussion: {
    Category: process.env.COMMAND_DISCUSSION_CATEGORY
  },
  CodeWars: {
    Token: process.env.CODEWARS_TOKEN
  },
  Users: {
    WhiteList: ['']
  }
}
