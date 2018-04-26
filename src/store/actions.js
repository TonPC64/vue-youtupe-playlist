import axios from 'axios'
let config
if (process.env.NODE_ENV === 'production') {
  config = require('../config/config').default
} else {
  config = require('../config/config.dev').default
}

console.log(config)

export async function search ({ commit }, keyword) {
  try {
    const { data } = await axios.get(`https://www.googleapis.com/youtube/v3/search/?q=${keyword}&maxResults=25&part=snippet&key=${config.API_KEY}`)
    this.searchResult = data
    commit('setSearchResult', data)
  } catch (error) {
    console.log(error)
  }
}

export function selectVideo ({ commit }, video) {
  commit('setSelected', video)
}

export function addToPlaylist ({ commit }, video) {
  commit('addToPlaylist', video)
}

export function removeFromPlaylist ({ commit }, index) {
  commit('removeFromPlaylist', index)
}
