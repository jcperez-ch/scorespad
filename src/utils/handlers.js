import { isFunction, isNil, noop } from 'lodash'

export const TARGET_NAME = Symbol('TARGET_NAME')

export const onEnter = (cb, next = noop) => (event) => {
  if (event.keyCode === 13) {
    event.preventDefault()
    cb()
  }
  next(event)
}

export const onChange = (cb, prop = null, next = noop) => (event) => {
  event.preventDefault()
  const { name, value } = event.target
  if (isNil(prop) || isFunction(prop)) {
    cb(value)
  } else {
    cb(prop === TARGET_NAME ? { [name]: value } : { [prop]: value })
  }

  if (isFunction(prop)) {
    prop(event)
  } else {
    next(event)
  }
}

const handlers = {
  onEnter,
}

export default handlers
