const createStream = require('./12_combiner')
const zlib = require('zlib')

const stream = createStream()

stream.pipe(zlib.createGunzip()).pipe(process.stdout)

stream.write('{"type": "genre", "name": "a"}\n')
stream.write('{"type": "book", "name": "1"}\n')
stream.write('{"type": "book", "name": "2"}\n')
stream.write('{"type": "genre", "name": "b"}\n')
stream.write('{"type": "book", "name": "3"}\n')
stream.write('{"type": "book", "name": "4"}\n')
stream.end()
