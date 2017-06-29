/**
const request = require('request')

const r = request.post('http://localhost:8099')
process.stdin.pipe(r).pipe(process.stdout)
**/

const fetch = require('node-fetch')

fetch(
  'http://localhost:8099',
  { method: 'POST', body: process.stdin }
).then((res) => {
  res.body.pipe(process.stdout)
})
