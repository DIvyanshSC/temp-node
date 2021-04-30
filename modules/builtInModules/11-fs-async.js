const { readFile, writeFile } = require('fs')

readFile('./new-content/first.txt','utf8',(err, result) => {
    if(err) {
        console.log(err)
        return;
    }
    const first_txt = result;
    readFile('./new-content/second.txt','utf8', (err, result) => {
        if(err) {
            console.log(err)
            return
        }
        const second_txt = result
        writeFile('./new-content/result-async.txt', `Here is ASync result : ${first_txt}, ${second_txt}`, (err, result) => {
            if(err) {
                console.log(err)
                return;
            }
            console.log(result)
        })
    })
})
