'use strict'

const http = require('http')
const waitTime = 3000
let requests = 0

function answer(n, req, res) {
  console.log(`${n}: Request numero ${n} just came in.`)
  console.log(`${n}: I do not feel like answering right away though...`)
  res.writeHead(200, { 'content-type': 'text/plain' })
  res.write(`You are number ${n} in our call-in line. Please be patient.\n`)


  // `setTimeout`...
  // just imagine a couple of network calls
  // or other I/O operations happening here
  setTimeout(() => {
    console.log(`${n}: Alright, alright. I'll answer ${n} now.`)
    res.end(`Hi there, ${n}. What's up?\n`)
  }, waitTime)
}

const server = http.createServer((req, res) => {
  requests = requests + 1
  answer(requests, req, res)
})

// start the server
server.listen(8000)
console.log('Listening on localhost:8000,')
console.log('but do not expect me to answer you right away...')
