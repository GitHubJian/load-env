const lib = require('../src')
const mode = 'development'
if (mode) {
    lib('development', { cwd: __dirname })
}

lib({ cwd: __dirname })

Object.prototype.filter = function (re) {
    const that = this

    return Object.keys(that)
        .filter((key) => {
            return re.exec(key)
        })
        .reduce((prev, cur) => {
            prev[cur] = that[cur]

            return prev
        }, {})
}

console.log(process.env.filter(/^MONGOLAB/i))
