const {spawn} = require('child_process')
const duplexer = require('duplexer2')

module.exports = (cmd, args) => {
  const s = spawn(cmd, args)
  return duplexer(s.stdin, s.stdout)
}
