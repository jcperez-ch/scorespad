import { get } from 'lodash'

const gaTrackingEnhancer = (reducer) => (state, action) => {
  if (window.ga) {
    const { type, ...payload } = action
    const { ga } = window
    switch (type) {
      case 'G+':
        ga('send', 'event', 'Game', 'create', payload.name)
        break
      case 'G-':
        ga('send', 'event', 'Game', 'remove', get(state, `${payload.key}.name`, ''))
        break
      case 'G=':
        ga('send', 'event', 'Game', 'rename', payload.name)
        break
      case 'G$':
        ga('send', 'event', 'Game', 'finish', get(state, `${payload.key}.name`, ''))
        break
      case 'T+':
        ga('send', 'event', 'Team', 'create', payload.name)
        break
      case 'T-':
        ga('send', 'event', 'Team', 'remove', get(state, `${payload.key}.teams.${payload.index}.name`, ''))
        break
      case 'T=':
        ga('send', 'event', 'Team', 'rename', payload.name)
        break
      case 'R+': {
        const date = new Date(parseInt(payload.round, 36))
        ga('send', 'event', 'Round', 'add', date.toISOString())
        break
      }
      case 'S++': {
        const date = new Date(parseInt(payload.round, 36))
        ga('send', 'event', 'Round', 'scores', date.toISOString())
        break
      }
      case 'S-':
        ga('send', 'event', 'Team', 'removeScore', get(state, `${payload.key}.teams.${payload.index}.name`, ''))
        break
      case 'C+':
        ga('send', 'event', 'Team', 'champion', get(state, `${payload.key}.teams.${payload.index}.name`, ''))
        break
      default:
    }
  }
  return reducer(state, action)
}

export default gaTrackingEnhancer
