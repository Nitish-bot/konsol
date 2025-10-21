import { Buffer } from 'buffer'
import { getRandomValues as expoCryptoGetRandomValues } from 'expo-crypto'

global.Buffer = Buffer

// getRandomValues polyfill
class Crypto {
  getRandomValues = expoCryptoGetRandomValues
}

const webCrypto = typeof global.crypto !== 'undefined' ? global.crypto : new Crypto()

if (typeof global.crypto === 'undefined') {
  Object.defineProperty(global, 'crypto', {
    configurable: true,
    enumerable: true,
    get: () => webCrypto,
  })
}