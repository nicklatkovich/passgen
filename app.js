
const sha256 = require('sha256')
const bs58 = require('bs58')

let key = process.argv[2]
let length = process.argv[3]
let hashString = sha256(key)
console.log('sha256 : ' + hashString)
let hash = Buffer.from(hashString, 'hex')
let hashBs58 = bs58.encode(hash)
console.log('bs58   : ' + hashBs58)
let result = hashBs58.slice(0, length)
console.log('pass   : ' + result)
