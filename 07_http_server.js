const http = require('http')
const through = require('through2')

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    req.pipe(through(function (chunk, _, next) {
      this.push(chunk.toString().toUpperCase())
      next()
    })).pipe(res)
  }
})

server.listen(process.argv[2])
