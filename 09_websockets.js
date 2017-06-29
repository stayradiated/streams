const ws = require('websocket-stream')
const stream = ws('ws://localhost:8099')

stream.write('hello\n')
