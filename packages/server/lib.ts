import lib from 'common'
const { math, Hello } = lib

import helloFromServer from './src/helloFromServer'

const makeBlo = () => {
  return 'I make blo!'
}

export { math, Hello, makeBlo, helloFromServer }