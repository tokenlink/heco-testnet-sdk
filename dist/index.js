
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./heco-testnet.cjs.production.min.js')
} else {
  module.exports = require('./heco-testnet.cjs.development.js')
}
