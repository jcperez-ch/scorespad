import { memo } from 'react'
import { set } from 'idb-keyval'
import { store } from 'utils/store'

const LocalStorage = memo(({ index, value }) => {
  set(index, value, store)
  return null
})

export default LocalStorage
