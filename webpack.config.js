var path = require('path')

module.exports = {
    entry: "./app/assets/scripts/App.js",
    output: {
        path: path.resolve(__dirname, "./app/temp/scripts"), /*generate an absolute path to the temp/scripts directory */
        filename: "App.js"
    }
}