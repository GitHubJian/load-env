const path = require('path')
const debug = require('debug')
const dotenv = require('dotenv')
const dotenvExpand = require('dotenv-expand')

module.exports = function loadEnv(mode, { cwd } = { cwd: process.cwd() }) {
    const logger = debug('vue:env')
    const basePath = path.resolve(cwd, `.env${mode ? `.${mode}` : ``}`)
    const localPath = `${basePath}.local`

    const load = (envPath) => {
        try {
            const env = dotenv.config({
                path: envPath,
                debug: process.env.DEBUG,
            })
            dotenvExpand(env)
            logger(envPath, env)
        } catch (err) {
            if (err.toString().indexOf('ENOENT') < 0) {
                console.error(err)
            }
        }
    }

    load(localPath)
    load(basePath)

    if (mode) {
        const shouldForceDefaultEnv = process.env.LOAD_ENV_TEST

        const defaultNodeEnv =
            mode === 'production' || mode === 'test' ? mode : 'development'

        if (shouldForceDefaultEnv || process.env.NODE_ENV == null) {
            process.env.NODE_ENV = defaultNodeEnv
        }
    }
}
