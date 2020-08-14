const lib = require('../src')

lib('development', { cwd: __dirname })

console.log(process.env)
