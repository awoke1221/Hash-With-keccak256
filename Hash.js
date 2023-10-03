// Hashing Messages With keccak 256 hash function
const {keccak256} = require('ethereum-cryptography/keccak')
const{ utf8ToBytes, toHex} = require('ethereum-cryptography/utils')

function HashMessage(message){
    return toHex(keccak256(utf8ToBytes(message)))
}

console.log(HashMessage("Hello world"))

