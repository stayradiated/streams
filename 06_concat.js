const concat = require('concat-stream')

process.stdin
  .pipe(concat((input) => {
    const reversedInput = input.reverse().toString()
    console.log(input)
  }))
