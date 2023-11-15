const fs = require('fs')

// read text
const readText = fs.readFileSync("./texts/read.txt", 'utf-8')

// write text

const writtenText = fs.writeFileSync("./texts/write.txt", readText + "this my text")
console.log(writtenText);