const through = require('through2').obj
const duplexer = require('duplexer2')

module.exports = (counter) => {
  const counts = {}

  const write = (row, _, next) => {
    counts[row.country] = (counts[row.country] || 0) + 1
    next()
  }

  const end = (done) => {
    counter.setCounts(counts)
    done()
  }

  const input = through(write, end)

  return duplexer({objectMode: true}, input, counter)
}
