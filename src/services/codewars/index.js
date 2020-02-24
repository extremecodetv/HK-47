const { CodeWars } = require('./../../config')
const axios = require('axios')

const request = axios.create({
  baseURL: 'https://www.codewars.com/api/v1',
  headers: {
    authorization: CodeWars.Token
  }
})

const getUserProfile = async (username) => {
  try {
    const response = await request.get(`/users/${username}`)
    if (response.status === 200) {
      return response.data
    }

    return null
  } catch (e) {
    // WIP: handle and log
  }
}

module.exports = {
  getUserProfile
}
