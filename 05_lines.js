const through = require('through2')
const split = require('split')

let line = 0

function write (buffer, encoding, next) {
  if (line % 2 === 1) {
    this.push(buffer.toString().toUpperCase() + '\n')
  } else {
    this.push(buffer.toString().toLowerCase() + '\n')
  }
  line += 1
  next()
}

const end = (done) => {
  done()
}

const tr = through(write, end)

process.stdin.pipe(split()).pipe(tr).pipe(process.stdout)
