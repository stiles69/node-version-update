const fs = require('fs-extra')
const file = './versioner.js'

fs.readFile('./package.json', function(err,content){
    if(err) throw err;
    var parseJson = JSON.parse(content);
    console.log(parseJson.version)
    parseJson.version = "2.0.0"
    // With a callback:
    fs.outputFile(file, 'const version = "' + parseJson.version + '"' + '\r\n' + 'export default { version }', err => {
        console.log(err) // => null
    
        fs.readFile(file, 'utf8', (err, data) => {
        if (err) return console.error(err)
        console.log(data) // => hello!
        })
    })
})
