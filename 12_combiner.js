const combine = require('stream-combiner')
const split = require('split')
const through = require('through2')
const zlib = require('zlib')

module.exports = () => {
  let state = null

  return combine(
    split(),
    through(function (input, _, next) {
      var data

      try {
        data = JSON.parse(input)
      } catch (err) {
        data = {}
      }

      if (data.type === 'genre') {
        if (state != null) {
          this.push(JSON.stringify(state) + '\n')
        }
        state = { name: data.name, books: [] }
      } else if (data.type === 'book') {
        state.books.push(data.name)
      }

      next()
    }, function (next) {
      if (state != null) {
        this.push(JSON.stringify(state) + '\n')
      }
      next()
    }),
    zlib.createGzip()
  )
}
