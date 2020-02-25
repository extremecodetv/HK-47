
const { Discussion } = require('./../../config')

const createChannel = async ({ guild, title, type }) => {
  const channel = await guild.channels.create(
    title,
    {
      parent: Discussion.Category,
      type: type
    }
  )

  return channel
}

const create = async (guild, { userId, title }) => {
  const [text, voice] = await Promise.all([
    createChannel({ guild, title, type: 'text' }),
    createChannel({ guild, title, type: 'voice' })
  ])

  return true
}

module.exports = {
  create
}
