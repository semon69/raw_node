const fs = require('fs')

fs.readFile("./texts/read.txt", "utf-8", (err, data)=> {
    if(err){
        throw Error("Something wrong")
    }
    console.log(data)

    // file write
    fs.writeFile("./texts/write2.txt", data, "utf-8", (err)=> {
        if(err){
            throw Error('Error in write')
        }
    })
})

console.log("asunc");