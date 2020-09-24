const lib = require('../src')
const NODE_ENV = process.env.NODE_ENV || 'development'
lib(NODE_ENV, {cwd: __dirname})

Object.prototype.filter = function (re) {
    const that = this

    return Object.keys(that)
        .filter(key => {
            return re.exec(key)
        })
        .reduce((prev, cur) => {
            prev[cur] = that[cur]

            return prev
        }, {})
}

console.log(process.env.filter(/^MONGOLAB/i))
